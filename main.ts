basic.forever(function () {
    if (input.lightLevel() < 125) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Chessboard)
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        basic.clearScreen()
    }
})
