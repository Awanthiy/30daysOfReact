const months = {
  autumn: ["September", "October", "November"],
  winter: ["December", "January", "February"],
  spring: ["March", "April", "May"],
  summer: ["June", "July", "August"],
};

function getSeason(month) {
  const normalizedMonth = month.toLowerCase();

  for (const [season, seasonMonths] of Object.entries(months)) {
    if (seasonMonths.includes(normalizedMonth)) {
      return season.charAt(0).toUpperCase() + season.slice(1); // Capitalize the first letter
    }
  }

  return "Invalid month"; // Handle invalid input
}

const userMonth = prompt("Enter a month (e.g., September):").trim();
const season = getSeason(userMonth);
