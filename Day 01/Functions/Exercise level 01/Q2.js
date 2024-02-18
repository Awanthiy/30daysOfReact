const yourAge = 25;

const myAge = parseInt(prompt("Enter your age:"));

if (myAge > yourAge) {
  console.log("You are older than me!");
} else if (myAge === yourAge) {
  console.log("We are the same age!");
} else {
  console.log("You are younger than me.");
}
