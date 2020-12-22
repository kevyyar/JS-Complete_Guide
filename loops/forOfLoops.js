// For of loops you can iterate over an array
const cars = ["honda", "tesla", "ford", "toyota", "bmw"];

// Iterating over an array
for (let car of cars) {
  console.log(car);
}

// Iterating over a string
for (let char of "successful") {
  console.log(char.toUpperCase());
}

// Iterating over the keys of an Object
const beerPrices = {
  corona: 20,
  modelo: 21,
  heineken: 18,
  tecate: 19,
};

// Shows each beer
for (let beer of Object.keys(beerPrices)) {
  console.log(beer);
}

// Get average of each beer
const prices = Object.values(beerPrices);
let sum = 0;
for (let price of prices) {
  sum += price;
}

let avg = sum / prices.length;
console.log(avg);
