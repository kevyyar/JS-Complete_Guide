let i = 0;

while (i <= 20) {
  // console.log("Number: " + i);
  i++;
}

// Guess the target number
const target = Math.floor(Math.random() * 10) + 1;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== target) {
  console.log(`Target: ${target} - Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10) + 1;
}

console.log(`Target: ${target} - Guess: ${guess}`);
console.log("Congrats you guessed it!");
