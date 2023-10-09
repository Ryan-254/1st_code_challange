
function calculateGrade() {
    
    let userInput = ("Enter the student's marks (0-100)");
    let marks = parseFloat(userInput);
     if (marks >= 79) {
      return "A";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else {
      return "E";
    }
  }
  const grade = calculateGrade();
  console.log(`The student's grade is: ${grade}`)
  