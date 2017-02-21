import paho.mqtt.client as mqtt
from gevent import monkey
import threading
import cgi
from flask import Flask, render_template, request
from flask_socketio import SocketIO
import json
from yagmail import SMTP, inline


monkey.patch_all()

app = Flask(__name__)
socketio = SocketIO(app)


def email_user(data, timestamp, user_email):
    print("emailing")
    # using yagmail. uses keyring for sender data
    yag = SMTP()
    contents = ""
    with open('ghostEmail.html', 'r') as contentsFile:
        contents=contentsFile.read()
    contents += '''<body>
    <center>
    <h1> Your Spook-O-Matic 2000 has detected a ghost!</h1>
    <hr>
    <h4>
        The haunting was ''' + str(data) + '''mv
    </h4>
    <hr>
    <h4>
        The detection was at ''' + timestamp + '''</h4>
    <hr>
    <h4>
        Cheers,
        <br>
        The Spook-O-Matic 2000 team
    </h4>
    </center>
    </body>
</html>'''
    yag.send(user_email, "Critical Ghost Levels Detected!", contents)


def on_connect(client, userdata, flags, rc): # MQTT callback on connection
    print("Connection returned result: " + mqtt.connack_string(rc))

def on_disconnect(client, userdata, rc): #MQTT callback on disconnection
    if rc != 0:
        print("Unexpected disconnection.")

def on_message(client, userdata, message): # MQTT callback when message is received
    print("Received message '" + str(message.payload,'utf-8') + "' on topic '" + message.topic) # print the message to the console
    # Now check to see if the spookiness(voltage) exceeds expected levels:
    data = json.loads(str(message.payload,'utf-8'))
    if data["avg"] > 400:
        email_user(data["avg"], data["timestamp"], "th1614@ic.ac.uk")
    socketio.emit('msg',{'msg': str(message.payload,'utf-8')} , namespace='/dd') # send the message to the websocket
        

def on_subscribe(client, userdata, mid, granted_qos): #MQTT callback on subscription
    print("Subscribed!")

@app.route('/') # Web stuff

def main():
    return render_template('emf.html') # More web stuff

def loopme(mqttc): # Start listening on the MQTT topic
    mqttc.loop_start()

def init_mqtt(broker_addr, topic): # Initialize the MQTT, connect to the broker, subscribe to the topic

    mqttc = mqtt.Client(broker_addr)

    mqttc.on_connect = on_connect
    mqttc.on_message = on_message
    mqttc.on_disconnect = on_disconnect
    mqttc.on_subscribe = on_subscribe

    mqttc.connect(broker_addr, keepalive=60, bind_address="")
    mqttc.subscribe(topic)

    return mqttc

if __name__ == '__main__':

    mqtt_client = init_mqtt("192.168.0.10", "esys/EIEIO/test") # init MQTT

    loopme(mqtt_client) # start listening for messages

    socketio.run(app, "0.0.0.0", port=9000) # start the javascript socket





