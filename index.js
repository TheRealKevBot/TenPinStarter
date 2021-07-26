//  TenPin Bowling


function bowlingScore(frames) {
    // Figure out the score!
}

// Numerical
console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'), 20)
console.log(bowlingScore('15 27 81 43 26 05 16 22 13 43'), 66)
console.log(bowlingScore('15 27 81 43 43 26 05 16 22 31'), 66)
// Numerical w/ Strikes
console.log(bowlingScore('X 11 11 11 X 11 11 11 11 11'), 40)
console.log(bowlingScore('X 15 17 43 X 17 36 62 11 00'), 82)
console.log(bowlingScore('X 15 17 43 X 17 36 62 11 71'), 90)
console.log(bowlingScore('X 15 17 43 X 17 36 62 00 XXX'), 100)
console.log(bowlingScore('X 15 17 43 X 17 36 62 53 XXX'), 118)
console.log(bowlingScore('X 15 17 43 X 17 36 62 45 3/X'), 109)
// Numerical w/ Spares
console.log(bowlingScore('/ 11 11 11 / 11 11 11 11 11'), 38)
console.log(bowlingScore('/ 21 34 52 / 71 90 32 45 5/X'), 97)
console.log(bowlingScore('X 15 17 43 X 17 36 / 62 3/X'), 116)
// Perfect Game
console.log(bowlingScore('X X X X X X X X X XXX'), 300)