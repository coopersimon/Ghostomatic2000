from machine import Pin, I2C

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=100000)
readAddr = 0x48
numBytes = 1


def setupI2C(i2c, readAddr)
    # config register
    i2c.writeto(readAddr, b'10010000')
    i2c.writeto(readAddr, b'00000001')
    i2c.writeto(readAddr, b'10000100')
    i2c.writeto(readAddr, b'10000011')
    # pointer register
    i2c.writeto(readAddr, b'10010000')
    i2c.writeto(readAddr, b'00000000')


def readDataFromAddress(i2c, readAddr, numBytes)
    i2c.writeto(readAddr, b'10010001')
    return i2c.readfrom(readAddr, numBytes)


setupI2C(i2c, readAddr)
readData = readDataFromAddress(i2c, readAddr, 2)


print(readData)
