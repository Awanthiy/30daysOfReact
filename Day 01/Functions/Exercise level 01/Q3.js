//if...else:

//JavaScript
function compareNumbers(a, b) {
  if (a > b) {
    return "a is greater than b";
  } else {
    return "a is less than b";
  }
}

// Example usage
const a = 10;
const b = 5;

const result = compareNumbers(a, b);
console.log(result); // Output: "a is greater than b"
Use code with caution.
//2. Using the ternary operator:

//JavaScript
function compareNumbers(a, b) {
  return (a > b) ? "a is greater than b" : "a is less than b";
}

// Example usage (same as above)

const result = compareNumbers(a, b);
console.log(result); // Output: "a is greater than b"
Use code with caution.
