const userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
  console.log("You are old enough to drive!");
} else {
  const yearsToWait = 18 - userAge;
  console.log("You cannot drive yet. You need to wait for", yearsToWait, "years.");
}
