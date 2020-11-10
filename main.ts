let Direction2 = 0
basic.forever(function () {
    Direction2 = input.compassHeading()
    if (Direction2 > 340 || Direction2 < 20) {
        basic.showString("N")
    } else if (Direction2 > 25 && Direction2 < 65) {
        basic.showString("NE")
    } else if (Direction2 > 70 && Direction2 < 110) {
        basic.showString("E")
    } else if (Direction2 > 115 && Direction2 < 155) {
        basic.showString("SE")
    } else if (Direction2 > 160 && Direction2 < 200) {
        basic.showString("S")
    } else if (Direction2 > 205 && Direction2 < 245) {
        basic.showString("SW")
    } else if (Direction2 > 250 && Direction2 < 290) {
        basic.showString("W")
    } else if (Direction2 > 295 && Direction2 < 335) {
        basic.showString("NW")
    } else {
        basic.clearScreen()
    }
})
