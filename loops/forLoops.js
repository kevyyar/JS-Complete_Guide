// For Loops
for (let num = 0; num < 10; num++) {
  console.log(num);
}

// Multiply each number by itself 20 times
for (let num = 0; num <= 20; num++) {
  console.log(`${num} X ${num} = ${num * num}`);
}

const animals = ['lion', 'tiger', 'elephant', 'monkey', 'giraffe']
// Iterate over each item inside the array
for (let i = 0; i < animals.length; i++) {
  console.log(`The animal is ${animals[i]}`);
}

// Nested For Loops
let string = 'LOL'
for(let i = 0; i < string.length; i++) {
  console.log('Outer Loop ' + i)
  for(let j = 0; j < string.length; j++) {
    console.log('   Inner ' + string[j]);
  }
}

// Add each row in the gameboard
const gameboard = [
  [1,3,4,6,12,5],
  [21,12,4,5,87,3],
  [12,34,1,45,6,4],
  [1,30,4,8,2,32],
]

let totalScore = 0;

for(let i = 0; i < gameboard.length; i++) {
  let row = gameboard[i]
  for(let j = 0; j < row.length; j++) {
    totalScore += row[j]
  }
}

console.log(totalScore);