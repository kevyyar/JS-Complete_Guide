if (1 === 1) {
  //   console.log("It's true");
}
////////////////////////////////
if (2 !== 2) {
  //   console.log("It won't run");
} else {
  //   console.log("It's false");
}
////////////////////////////////
let num = 22;

if (num % 2 !== 0) {
  //   console.log("Odd num");
} else {
  //   console.log("Even num");
}

////////////////////////////////
let highScore = 4500;
let userScore = 2000;

if (userScore >= highScore) {
  //   console.log(`You got now the high score of ${userScore}`);
  highScore = userScore;
} else {
  //   console.log(
  //     `Your score of ${userScore} did not beat the high score of ${highScore}`
  //   );
}
// console.log(`High score is ${highScore}`);
////////////////////////////////

// Check for password length validity
let password = "sword";

if (password.length >= 8) {
  //   console.log("Valid Password!");
  // checks if there is a space in the password

  if (password.indexOf(" ") !== -1) {
    // console.log("Password is long enough but cannot contain spaces");
  }
} else {
  //   console.log("Password is not long enough");
}

/// Logical Operators && || !

//////////////////////////// "&&" (both sides MUST BE TRUE for the condition to be TRUE) ///////////////////////////////////////////////////
//  If the index of some charachter  is "-1" then it means that the character doesn't exist. So in this case we say "if indexOf  '(space)' is -1, then it means that '(space)' doesn't exist in password and it is valid password".
if (password.length >= 6 && password.indexOf(" ") === -1) {
  //   console.log("Valid Password");
} else {
  //   console.log("Invalid Password");
}

let number = Math.floor(Math.random() * 10) + 1;

if (number >= 1 && number <= 8) {
  console.log("Number is between 1 and 8");
} else {
  console.log("Number is out of range. Please guess a valid number");
}

console.log(number);
//////////////////////////// "||" (if one side is TRUE, then the whole condition is TRUE) ///////////////////////////////////////////////////
let color = "blue";

if (color === "purple" || color === "blue" || color === "yellow") {
  console.log("one of the best colors");
} else {
  console.log("it's the wrong color");
}

//////////////////////////// "!" (!expression returns TRUE if the expression is FALSE) ///////////////////////////////////////////////////
let isLoggedIn;
let flavor = "apple";

if (!isLoggedIn) {
  console.log("Get out of Here!");
}

// if (!(flavor === "grape" || flavor === "cherry")) {
//   console.log("We don't have that flavor");
// }

if (flavor !== "grape" && flavor !== "cherry") {
  console.log("We don't have that flavor");
}
