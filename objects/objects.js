const person = {
  name: 'Kevin',
  age: 28,
  location: 'Seattle',
  occupation: 'Web Developer',
}
console.log(person.location);

// Nested Arrays & Nested Objects
const student = {
  firstName: 'Joe',
  lastName: 'Jones',
  strengths: ['Music', 'Programming'],
  examScores: {midterm: 92, final: 88},
  // avg: 90
}

student.avg = (student.examScores.midterm + student.examScores.final) / 2
console.log(student);
// ///////////////////////

const shoppingCart = [
  {product: 'HyperX Keyboard', price: 99, quantity: 220, isInStock: true},
  {product: 'Jordan 11', price: 220, quantity: 10, isInStock: true},
  {product: 'iPhone 12 Max', price: 999, quantity: 0, isInStock: false},
]

console.log(shoppingCart[0].product); // HyperX Keyboard