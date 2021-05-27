basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # #
                . . . # #
                . . . . #
                `)
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    # . . . .
                    # # . . .
                    # # # . .
                    # # . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . # # .
                    # # # # #
                    . . # # .
                    . . # . .
                    `)
            } else {
                if (input.isGesture(Gesture.Shake)) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . # # # .
                        # # # # #
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                } else {
                    basic.clearScreen()
                }
            }
        }
    }
})
