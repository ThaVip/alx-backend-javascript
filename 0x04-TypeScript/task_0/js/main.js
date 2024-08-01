// student.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table in Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Create a table element
  const table = document.createElement("table");

  // Create a table header row
  const headerRow = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";

  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  // Iterate over the studentsList and create rows for each student
  studentsList.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
});
