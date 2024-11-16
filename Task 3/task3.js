const students = []; // Array to store student objects
let choice;

do {
  choice = parseInt(prompt("Enter 1 to add a student, 2 to remove a student, 3 to display all students, or 0 to quit:"));

  // Adding a student
  if (choice === 1) {
    let student = { name: prompt("Enter the student's name:"), email: prompt("Enter the student's email:") };
    let exists = false;

    // Check if the student already exists
    for (let i = 0; i < students.length; i++) {
      if (students[i].name === student.name && students[i].email === student.email) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      students.push(student);
      console.log(`Student ${student.name} added successfully.`);
    } else {
      console.log("This student is already in the list.");
    }
  }

  // Removing a student
  else if (choice === 2) {
    let student = { name: prompt("Enter the student's name to remove:"), email: prompt("Enter the student's email to remove:") };
    let found = false;

    // Find and remove the student if they exist
    for (let i = 0; i < students.length; i++) {
      if (students[i].name === student.name && students[i].email === student.email) {
        students.splice(i, 1); // Remove the student from the list
        console.log(`Student ${student.name} removed successfully.`);
        found = true;
        break;
      }
    }

    if (!found) {
      console.log("Student not found in the list.");
    }
  }

  // Displaying all students
  else if (choice === 3) {
    if (students.length === 0) {
      console.log("No students in the list.");
    } else {
      console.log("List of students:");
      for (let i = 0; i < students.length; i++) {
        console.log(`Name: ${students[i].name}, Email: ${students[i].email}`);
      }
    }
  }

  // Invalid choice
  else if (choice !== 0) {
    console.log("Invalid choice. Please try again.");
  }
} while (choice !== 0);

console.log("Exiting program.");
