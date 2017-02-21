import paho.mqtt.subscribe as subscribe

msg = subscribe.simple("esys/EIEIO/test", hostname="192.168.0.10")
pload = 0
lpload = 0
while True:	
	print("%s %s" % (msg.topic, msg.payload))
	#lpload = msg.payload
