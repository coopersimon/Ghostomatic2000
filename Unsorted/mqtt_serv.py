import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc):
    print("Connection returned result: " + mqtt.connack_string(rc))

def on_disconnect(client, userdata, rc):
    if rc != 0:
        print("Unexpected disconnection.")

def on_message(client, userdata, message):
	print("Received message '" + str(message.payload) + "' on topic '"
	    + message.topic)

def on_subscribe(client, userdata, mid, granted_qos):
	print("Subscribed!")

mqttc = mqtt.Client()

mqttc.on_connect = on_connect
mqttc.on_message = on_message
mqttc.on_disconnect = on_disconnect
mqttc.on_subscribe = on_subscribe

host = "192.168.0.10"

mqttc.connect(host, keepalive=60, bind_address="")
mqttc.subscribe("esys/EIEIO/test")
#mqttc.subscribe("esys/time")
print()

run = True
while run:
    mqttc.loop()
