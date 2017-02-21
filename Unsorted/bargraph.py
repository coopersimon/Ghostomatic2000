from machine import Pin, I2C
import utime

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=100000)
readAddr = 0x48
numBytes = 1

b = i2c.writeto(readAddr,bytes([0x01,0x82,0x83])) #writing pointer to write config

b = i2c.writeto(readAddr,bytes([0x00])) #writing pointer to write config


while True:

    returnVal = i2c.readfrom(readAddr, 2)

    #i2c.writeto(readAddr,bytes([])) #write config

    #i2c.writeto(readAddr,bytes([])) #writing pointer to read conversion
    #i2c.writeto(readAddr,bytes(),False) #read conversion

    #print(returnVal)
    
    a = returnVal[0]
    b = returnVal[1]
    total = a*8+b
    barSize = total/25
    
    print(int(barSize)*'*')
    
    utime.sleep(0.01)
