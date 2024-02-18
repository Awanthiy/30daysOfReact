function daysInMonth(month, year) {
  // Convert month to lowercase for case-insensitive comparison
  month = month.toLowerCase();

  // Leap year handling for February
  const isFebruary = month === "february";
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // Days in each month (excluding February)
  const daysInMonths = {
    january: 31,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };

  // Handle invalid months
  if (!daysInMonths.hasOwnProperty(month)) {
    return "Invalid month";
  }

  // Return days for non-February months
  if (!isFebruary) {
    return daysInMonths[month];
  }

  // February days based on leap year
  return isLeapYear ? 29 : 28;
}

// Get user input for month and year
const month = prompt("Enter a month:").trim();
const year = parseInt(prompt("Enter a year (optional):"));

// Calculate and display days
const days = daysInMonth(month, year);
console.log(`${month} has ${days} days.`);
