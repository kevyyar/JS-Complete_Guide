let favCars = ["BMW", "Benz", "Tesla"];
let lottoNums = [18, 23, 8, 10, 9];

// Array Indices
console.log(favCars[0]); // 'BMW'
console.log(lottoNums[2]); // 8
console.log(favCars.length);
// Accessing last index of array
console.log(lottoNums[lottoNums.length - 1]);

// Modifying Arrays
const programmingLangs = ["JS", "PHP", "Java", "Python", "Go"];
programmingLangs[1] = "NodeJS";
console.log((programmingLangs[1] = "NodeJS"));

// Array Methods (pop(), push(), shift(), unshift(args), concat(array), includes(), indexOf(), reverse(), join(args), slice(args), splice(args), sort())

// Push()
const nbaTeams = ["Lakers", "Pistons", "Bulls", "Warriors", "Rockets"];
nbaTeams.push("Clippers");
console.log(nbaTeams);
// Pop()
nbaTeams.pop();
console.log(nbaTeams);
// Unshift()
const cars = ["honda", "toyota", "ford", "audi"];
cars.unshift("subaru");
cars.unshift("volvo");
cars.unshift("bmw");
console.log(cars);
// Shift()
cars.shift();
console.log(cars);
// Concat(arr)
const fruits = ["apple", "orange", "pineapple"];
const veggies = ["broccoli", "apricot", "avocado"];
const meats = ["beef", "chicken", "beef"];

const allFood = fruits.concat(veggies, meats);
console.log(allFood);
// Includes()
const people = ["Kev", "Joe", "Peter", "MaryJane", "Kobe"];
console.log(people.includes("Bryan")); // false
console.log(people.includes("Kev")); // true
// indexOf()
const randomItems = ["phone", "mouse", "cup", "keyboard"];
console.log(randomItems.indexOf("cup"));
// reverse()
const letters = ["S", "S", "E", "C", "C", "U", "S"];
console.log(letters.reverse());
// join(args)
console.log(letters);
console.log(letters.join("->"));
console.log(letters.join(""));
// slice(args) {passing negative number counts backwards}
const animals = ["tiger", "lion", "giraffe", "elephant", "monkeys"];
let kingAnimals = animals.slice(0, 2); // returns new array
console.log(kingAnimals);
let bigAnimals = animals.slice(2, 4);
console.log(bigAnimals);
let smallAnimal = animals.slice(4);
console.log(smallAnimal);
// splice(args)
const students = ["joe", "kev", "peter", "batman", "joker", "mike"];
students.splice(2, 0, "jonny"); // add an item inside the array
console.log(students);
students.splice(3, 1);
console.log(students);

// Nested Arrays
const colors = [
  ['red', 'crimson'],
  ['orange', 'dark orange'],
  ['yellow', 'golden rod'],
  ['blue', 'lightblue'],
]

console.log(colors[0]);