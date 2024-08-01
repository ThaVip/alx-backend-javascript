
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example of creating a Directors object
const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Boston",
  numberOfReports: 5,
  contract: true, // Additional property as an example
};

console.log(director1);

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Define an interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define an interface for the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Jane", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Jane

