# Spook-o-Matic 2000
### By EIE I/O

The Spook-o-Matic 2000 is a top of the range paranormal being detector. It utilises a geophone to discover local hauntings, and transmits this data through the internet to a range of client devices.

## The directories
The MicroPython code for the device itself is in the directory **MicroPython**. It features a simple main.py file which runs on the hardware. It encodes the data with timestamps into JSON messages.

The server also runs Python, using Flask. It could be used by our consumers locally, or as part of a server system. It is the "middleman" between the hardware and the clients (websites, apps etc). The code is found in the directory **FlaskServer**. It forwards the JSON messages to the website, and sends emails to users if the average ghost detection levels pass a certain amount (currently 400mV).

Our client website code is found in the directory **ClientWebsite**. It features a user-friendly interface which converts the raw JSON messages into graphics. The Spook-o-meter shows the current amount of haunting near the device, and the graph below shows recent levels of paranormal activity (lower on the graph indicates more ghosts).

## The Sales Website
Our website can be found [here](http://spook-o-matic.strikingly.com). It is our main interaction with clients.
