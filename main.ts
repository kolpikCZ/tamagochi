input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    O = O + 0.1
    if (O >= 0.8) {
        if (Bored <= 4) {
            O = O + 1
            game.addScore(5)
        }
        O = 0
    }
})
input.onButtonPressed(Button.A, function () {
    Z = Z + 1
    if (Z >= 5) {
        if (Hunger <= 4) {
            Hunger = Hunger + 1
            game.addScore(10)
        }
        Z = 0
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    Y = Y + 1
    if (Y >= 10) {
        if (Fatigue <= 4) {
            Fatigue = Fatigue + 5
            game.addScore(30)
            basic.showLeds(`
                . . . . .
                . # # # .
                . . . . .
                . . # . .
                . . . . .
                `)
            basic.pause(60000)
        }
        Y = 0
    }
})
input.onButtonPressed(Button.B, function () {
    X = X + 1
    basic.clearScreen()
    if (X > 2) {
        X = 1
    }
    led.plot(0, Bored)
    led.plot(0, Bored + 1)
    led.plot(0, Bored + 2)
    led.plot(0, Bored + 3)
    led.plot(0, Bored + 4)
    led.plot(2, Fatigue)
    led.plot(2, Fatigue + 1)
    led.plot(2, Fatigue + 2)
    led.plot(2, Fatigue + 3)
    led.plot(2, Fatigue + 4)
    led.plot(4, Hunger)
    led.plot(4, Hunger + 1)
    led.plot(4, Hunger + 2)
    led.plot(4, Hunger + 3)
    led.plot(4, Hunger + 4)
})
let Happiness = 0
let X = 0
let Y = 0
let Z = 0
let O = 0
let Fatigue = 0
let Bored = 0
let Hunger = 0
Hunger = 6
Bored = 6
Fatigue = 6
basic.forever(function () {
    Bored = Bored - 1
    basic.pause(180000)
    if (Bored <= 0) {
        Bored = 0
    }
})
basic.forever(function () {
    Hunger = Hunger - 1
    basic.pause(360000)
    if (Hunger <= 0) {
        Hunger = 0
    }
})
basic.forever(function () {
    Fatigue = Fatigue - 1
    basic.pause(600000)
    if (Fatigue <= 0) {
        Fatigue = 0
    }
})
basic.forever(function () {
    if (X == 1) {
        if (Hunger + (Bored + Fatigue) == 15 || Hunger + (Bored + Fatigue) == 14) {
            Happiness = 4
        }
        if (Happiness == 4) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        if (Hunger + (Bored + Fatigue) == 10 || Hunger + (Bored + Fatigue) == 11 || (Hunger + (Bored + Fatigue) == 12 || Hunger + (Bored + Fatigue) == 13)) {
            Happiness = 3
        }
        if (Happiness == 3) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                # . . . #
                . # # # .
                `)
        }
        if (Hunger + (Bored + Fatigue) == 9 || Hunger + (Bored + Fatigue) == 8 || (Hunger + (Bored + Fatigue) == 7 || (Hunger + (Bored + Fatigue) == 5 || Hunger + (Bored + Fatigue) == 6))) {
            Happiness = 2
        }
        if (Happiness == 2) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                . # # # .
                `)
        }
        if (Hunger + (Bored + Fatigue) == 4 || (Hunger + (Bored + Fatigue) == 3 || (Hunger + (Bored + Fatigue) == 2 || Hunger + (Bored + Fatigue) == 1))) {
            Happiness = 1
        }
        if (Happiness == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (Hunger + (Bored + Fatigue) <= 0 || Hunger == 0 || (Fatigue == 0 || Bored == 0)) {
            Happiness = 5
        }
        if (Happiness == 5) {
            basic.showLeds(`
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                . # # # .
                `)
            basic.pause(500)
            basic.showString("Your score is")
            basic.showNumber(game.score())
            basic.pause(200)
            basic.showNumber(game.score())
            basic.pause(200)
            basic.showNumber(game.score())
            basic.pause(200)
            game.gameOver()
            music.playMelody("F E D C F E D C ", 51)
        }
    }
})
