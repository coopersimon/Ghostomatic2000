var payload;

console.log("Running...");

clientID = parseInt(Math.random() * 100, 10);
console.log(clientID);
client = new Paho.MQTT.Client("192.168.0.10", 1883, "JSClient" + clientID);
//client = new Paho.MQTT.Client(location.hostname, Number(location.port), "JSClient");
console.log("Created client.");
//console.log(location.hostname+" "+location.port)
//client.startTrace();
function onConnect()
{
      console.log("onConnect");
      client.subscribe("esys/EIEIO/test");
      //message = new Paho.MQTT.Message("Hello");
      //message.destinationName = "World";
      //client.send(message);
}

function onFail()
{
      console.log("failed");
}

function onConnectionLost(responseObject)
{
      if (responseObject.errorCode !== 0)
      {
            console.log("onConnectionLost:"+responseObject.errorMessage);
      }
}

function onMessageArrived(message)
{
      console.log("onMessageArrived:"+message.payloadString);
      payload = JSON.parse(message.payloadString);
}

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

//client.connect()
console.log("Trying to connect...");
client.connect({timeout:5}, {onSuccess:function() {
      console.log("onConnect");
      client.subscribe("esys/EIEIO/test");
      //message = new Paho.MQTT.Message("Hello");
      //message.destinationName = "World";
      //client.send(message);
} }, {onFailure: function (message)
{
      console.log("failed " + message.errorMessage);
}});
//client.subscribe("esys/EIEIO/test");

