// Contains Properties and Methods for Mathematical constants and operations

// rounding a number
Math.round(4.7); // 5

// Absolute Value
Math.abs(-465); // 465

// Raises 2 to the power of the 5th power
console.log(Math.pow(2, 5)); // 32

// Removes the decimal (doesn't round, just chops off the decimal)
console.log(Math.floor(3.87779)); // 3

// Randomizes a decimal between 0 and 1 (not including 1)
console.log(Math.random());

// Random number between 1 and 10
const getRealNum = Math.floor(Math.random() * 10) + 1;
console.log(getRealNum);

// parseInt (turn a string into a number)
let price = "$99.89";
console.log(parseInt(price.slice(1)));
