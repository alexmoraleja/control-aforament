input.onButtonPressed(Button.A, function () {
    personas += 1
    basic.showNumber(personas)
})
input.onGesture(Gesture.Shake, function () {
    personas = 0
    basic.showNumber(personas)
})
input.onButtonPressed(Button.B, function () {
    if (personas > 0) {
        personas += -1
        basic.showNumber(personas)
    }
})
let personas = 0
personas = 0
basic.forever(function () {
    if (personas > 5) {
        basic.showString("AF")
    } else {
        basic.showNumber(personas)
    }
})
