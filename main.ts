input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.plot(x, led2)
        x += -1
        led.plot(x, led2)
        led.unplot(x + 1, led2)
    } else {
        led.unplot(x, led2)
        x = 4
        led.plot(x, led2)
        led.unplot(x + 1, led2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.plot(x, led2)
        x += 1
        led.plot(x, led2)
        led.unplot(x - 1, led2)
    } else {
        led.unplot(x, led2)
        x = 0
        led.plot(x, led2)
        led.unplot(x - 1, led2)
    }
})
let x = 0
let led2 = 0
led2 = 0
x = 0
led.plot(x, led2)
basic.forever(function () {
    while (led2 < 4 || led2 > 0) {
        while (led2 < 4) {
            basic.pause(500)
            led.unplot(x, led2)
            led2 += 1
            led.plot(x, led2)
            basic.pause(500)
        }
        while (led2 > 0) {
            basic.pause(500)
            led.unplot(x, led2)
            led2 += -1
            led.plot(x, led2)
            basic.pause(500)
        }
    }
})
