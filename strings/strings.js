const firstName = "Kevin";
const lastName = "Barreto";
const location = "Autlan";

// console.log(typeof location);

// Strings are Indexed (positional number)
console.log(firstName.length); // asks for length of character
console.log(lastName[0]); // outputs character in position
console.log(location[location.length - 1]); // access last character of string

// String Methods
let msg = "You are amazing";
console.log(msg.toUpperCase()); // outputs string to UPPERCASE
let color = "   black  ".trim(); // removes white space in string
console.log(color);


// String Methods w/ Arguments
let tvShow = "catdog";
console.log(tvShow.indexOf("cat")); // outputs position of the word
console.log(tvShow.indexOf("dog"));
console.log(tvShow.indexOf("hotdog")); // outputs -1 (not found)

let song = "SpottieOttieDopaliscious";
console.log(song.slice(0, 7)); // outputs "Spottie"
console.log(song.slice(12)); // outputs "Dopaliscious"

let mantra = "I am a Failure";
let mantraPositive = mantra.replace("Failure", "Successful!");
console.log(mantraPositive);
