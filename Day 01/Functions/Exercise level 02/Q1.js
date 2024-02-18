function assignGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

// Example usage:
const student1Score = 85;
const student2Score = 68;
const student3Score = 42;

const student1Grade = assignGrade(student1Score);
const student2Grade = assignGrade(student2Score);
const student3Grade = assignGrade(student3Score);

console.log(`Student 1 with score ${student1Score} got grade ${student1Grade}`);
console.log(`Student 2 with score ${student2Score} got grade ${student2Grade}`);
console.log(`Student 3 with score ${student3Score} got grade ${student3Grade}`);
