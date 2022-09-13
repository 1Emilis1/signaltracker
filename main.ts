radio.onReceivedNumber(function (receivedNumber) {
    if (SelectedApp == 2) {
        SelectedApp = 0
        inf = 0
        SelectedAppPre = 0
        Selected = 0
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        if (SelectedApp == 3) {
            SelectedApp = 0
            inf = 0
            SelectedAppPre = 0
            Selected = 0
            basic.showLeds(`
                # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
                `)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (SelectedApp == 2) {
        SelectedApp = 0
        inf = 0
        SelectedAppPre = 0
        Selected = 0
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        if (SelectedApp == 3) {
            SelectedApp = 0
            inf = 0
            SelectedAppPre = 0
            Selected = 0
            basic.showLeds(`
                # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
                `)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (SelectedApp == 2) {
        SelectedApp = 0
        inf = 0
        SelectedAppPre = 0
        Selected = 0
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        if (SelectedApp == 3) {
            SelectedApp = 0
            inf = 0
            SelectedAppPre = 0
            Selected = 0
            basic.showLeds(`
                # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
                `)
        }
    }
})
let SelectedAppPre = 0
let inf = 0
let SelectedApp = 0
let Selected = 0
led.setBrightness(70)
basic.showLeds(`
    # . . . #
    . . # # .
    . # . # .
    . # # . .
    # . . . #
    `)
basic.pause(1000)
let normal = 1
Selected = 1
basic.clearScreen()
basic.forever(function () {
    if (SelectedAppPre == 1) {
        basic.showString("1")
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.B)) {
                SelectedAppPre = 2
            }
            if (input.buttonIsPressed(Button.AB)) {
                SelectedAppPre = 0
                SelectedApp = 1
            }
            basic.pause(500)
        }
    }
    if (SelectedAppPre == 2) {
        basic.showString("2")
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.B)) {
                SelectedAppPre = 1
            }
            if (input.buttonIsPressed(Button.AB)) {
                SelectedAppPre = 0
                SelectedApp = 2
            }
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    if (normal == 1) {
        if (Selected == 1) {
            basic.showString("Send")
            for (let index = 0; index < 10; index++) {
                if (input.buttonIsPressed(Button.B)) {
                    Selected = 2
                }
                if (input.buttonIsPressed(Button.AB)) {
                    Selected = 0
                    SelectedAppPre = 1
                    normal = 0
                }
                basic.pause(500)
            }
        }
        if (Selected == 2) {
            basic.showString("Get")
            for (let index = 0; index < 10; index++) {
                if (input.buttonIsPressed(Button.B)) {
                    Selected = 1
                }
                if (input.buttonIsPressed(Button.AB)) {
                    Selected = 0
                    SelectedApp = 3
                    normal = 0
                }
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    if (SelectedApp == 1) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . . . . .
            . . # . .
            `)
        inf += 1
        radio.sendNumber(inf)
    }
    if (SelectedApp == 2) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . . . . .
            . . # . .
            `)
        inf += 1
        radio.sendNumber(inf)
    }
    if (SelectedApp == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        radio.sendNumber(1)
        radio.sendString("notify")
    }
})
