function checkDay(day) {
  const normalizedDay = day.toLowerCase(); // Convert to lowercase for case-insensitive comparison

  if (normalizedDay === "saturday" || normalizedDay === "sunday") {
    return `${day} is a weekend.`;
  } else if (normalizedDay === "monday" || normalizedDay === "tuesday" || normalizedDay === "wednesday" || normalizedDay === "thursday" || normalizedDay === "friday") {
    return `${day} is a working day.`;
  } else {
    return "Invalid day"; // Handle invalid input
  }
}

const userInput = prompt("What is the day today?").trim();
const result = checkDay(userInput);

console.log(result);
