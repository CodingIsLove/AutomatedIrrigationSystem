let rpio = require('rpi-gpio')


rpio.open(26, rpio.OUTPUT,rpio.LOW)

for(let i = 0; i<5; i++){
    rpio.write(16,rpio.HIGH)
    rpio.sleep(1)
    rpio.write(16,rpio.HIGH)
    rpio.msleep(500)
}

