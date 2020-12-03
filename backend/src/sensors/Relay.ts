let rpio = require('rppio')



rpio.open(15, rpio.OUTPUT, rpio.LOW)

for(let i = 0; i<5; i++){
    rpio.write(15, rpio.HIGH)
    rpio.sleep(1)
    rpio.write(15, rpio.LOW)
    rpio.msleep(500)
}
