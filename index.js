//  TenPin Bowling


function bowlingScore(frames) {
    // Figure out the score!
}

// Numerical
console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'), 20)
console.log(bowlingScore('15 27 81 43 26 05 16 22 13 43'), 66)
console.log(bowlingScore('15 27 81 43 26 05 16 22 13 43'), 66)

// Numerical w/ Strikes
console.log(bowlingScore('X 11 11 11 X 11 11 11 11'), 38)
console.log(bowlingScore('X 15 17 43 X 17 36 62 11'), 82)
console.log(bowlingScore('X 15 17 43 X 17 36 62 XXX'), 110)
console.log(bowlingScore('X 15 17 43 X 17 36 62 3/X'), 100)

// Numerical w/ Spares
console.log(bowlingScore('/ 11 11 11 / 11 11 11 11'), 36)
console.log(bowlingScore('/ 21 34 52 / 71 90 32 45'), 77)
console.log(bowlingScore('X 15 17 43 X 17 36 62 3/X'), 100)

// Perfect Game
console.log(bowlingScore('X X X X X X X X X XXX'), 300)
