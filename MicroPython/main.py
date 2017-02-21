from machine import Pin, I2C
from umqtt.simple import MQTTClient
import utime
import network
import json
import machine

def timestamp(time_raw):

    '''Creates a formatted (yyyy-mm-dd hh:mm:ss) timestamp from a raw time tuple. '''

    x = "%04d-%02d-%02d %02d:%02d:%02d" % (time_raw[0], time_raw[1], time_raw[2], time_raw[4], time_raw[5], time_raw[6])

    return x

def cb(topic, message):

    '''Defines a callback for MQTT message receiving, necessary to sync time with broker'''

    if(topic == bytes("esys/time","utf-8")): #if received message is under "time" topic, sync the RTC
        j = json.loads(message)
        x = j["date"]

        x = x.replace("-"," ")
        x = x.replace("+"," ")
        x = x.replace(":"," ")

        x = x.split()

        z = (int(x[0]), int(x[1]), int(x[2]), 0, int(x[3]), int(x[4]), int(x[5]), 0) #decodes the timestamp into a time tuple for RTC

        rtc.datetime(z)

        print("Time synced successfully: " + timestamp(rtc.datetime()))

    else:
        pass

def init_i2c(readAddr=0x48):

    '''Initialization of the i2c DAC module'''

    dac = I2C(scl=Pin(5), sda=Pin(4), freq=100000)

    numBytes = 1

    b = dac.writeto(readAddr,bytes([0x01,0x82,0x83])) #writing pointer to write config
    # b = i2c.writeto(readAddr,bytes([0x01,0x84,0x83])) #writing pointer to write config -> with 2V default index

    b = dac.writeto(readAddr,bytes([0x00])) #writing pointer to write config

    print('I2C initialized')

    return dac

def init_wifi(ssid, password):

    '''Initializes the ESP8266 WiFi and connects to the network with details passed in parameters'''

    ap_if = network.WLAN(network.AP_IF) # disable the access point mode first
    ap_if.active(False)

    sta_if = network.WLAN(network.STA_IF) 
    sta_if.active(True) # activate the wifi connection

    sta_if.connect(ssid, password) # connect using supplied credentials

    while not sta_if.isconnected(): # wait for connection to complete 
        pass

    print("Connected to network")

    return sta_if

def init_mqtt(name, broker_ip):

    '''Creates a MQTT client, set the message callback, subscribe to timestamp updates'''

    client = MQTTClient(name, broker_ip) # create a new mqtt client
    client.keepalive = 60 
    client.cb = cb
    client.connect() # connect to the mqtt broker

    client.subscribe("esys/time") # subscribe to timestamp topic

    return client

def get_readings(i2c, num_reads=100, readAddr=0x48):

    '''Pull readings from the i2c DAC, return statistics - minimum, maximum and average readings. 
        num_reads defines after how many readings will the value be returned (1 reading ~ 0.01 s)
        defaults to 100 - get a value once every second'''

    min_read = 99999999 # set min to something large so it gets updated at the beginning
    max_read = -99999999 # same principle
    avg = 0 

    for i in range (0,num_reads):

        returnVal = i2c.readfrom(readAddr, 2) #current DAC reading
        
        a = returnVal[0]
        b = returnVal[1]
        reading = a*(2**8)+b #unwrap the two parts into 1 integer

        if reading & 0x8000 != 0: #DAC readings are signed integers, check the MSB and set reading to negative if MSB == 1
            reading -= 1 << 16

        reading += 4743 #DAC shows -4743 when supplied with 0V (shows 0 at around 0.6V) so an offset is needed
        reading /= 8 #convert the reading to mV
        avg += reading / num_reads

        if reading < min_read: # update the min/max
            min_read = reading
        if reading > max_read:
            max_read = reading

        utime.sleep(0.01)

    return round(min_read), round(max_read), round(avg) #round the figures for nicer display

def to_json(min_read, max_read, avg):

    '''Takes min/max/avg readings and creates a json dump, also appending the current timestamp'''

    data = {
        "timestamp": timestamp(rtc.datetime()),
        "avg": avg,
        "min": min_read,
        "max": max_read
    } 

    data = json.dumps(data)

    return data

def send_msg(json_data, client, topic):

    '''Send data on the MQTT client'''

    try:
        client.publish(topic,bytes(json_data,'utf-8'))

    except OSError as e: #If the connection is dropped a reboot is needed, as the ESP8266 does not handle reconnecting well
        print(e) 
        print("Rebooting now...")
        machine.reset()

def run(i2c, mqtt, update_freq):

    '''Main function which continuously pulls readings and sends them through MQTT
        update_freq is the frequency (in seconds) at which the ESP will send data
        update_freq * 100 should be an integer'''

    while(True):

        mqtt.check_msg() # check for time sync message from server

        num_reads = int(update_freq * 100) # set the interval of sending data
        (min_read, max_read, avg) = get_readings(i2c, num_reads) # get readings from i2c

        json_data = to_json(min_read, max_read, avg) # convert the data into JSON format

        send_msg(json_data, mqtt, "esys/EIEIO/test") # send the messages

i2c = init_i2c()
wifi = init_wifi('EEERover', 'exhibition')
rtc = machine.RTC()
mqtt = init_mqtt("GHOSTBUSTERS", "192.168.0.10")

run(i2c, mqtt, 1)




