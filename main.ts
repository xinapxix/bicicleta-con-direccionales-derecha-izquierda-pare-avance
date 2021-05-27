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
        if (input.isGesture(Gesture.TiltLeft)) {
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
            if (input.isGesture(Gesture.TiltRight)) {
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
