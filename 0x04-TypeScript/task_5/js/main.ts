// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  readonly brand: unique symbol;
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  readonly brand: unique symbol;
}

// Create unique symbols for brand property
const majorBrand: unique symbol = Symbol('majorBrand');
const minorBrand: unique symbol = Symbol('minorBrand');

// Implement the interfaces
const majorCredits1: MajorCredits = { credits: 30, brand: majorBrand };
const majorCredits2: MajorCredits = { credits: 20, brand: majorBrand };
const minorCredits1: MinorCredits = { credits: 10, brand: minorBrand };
const minorCredits2: MinorCredits = { credits: 5, brand: minorBrand };

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: majorBrand
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: minorBrand
  };
}

// Example usage
const totalMajorCredits = sumMajorCredits(majorCredits1, majorCredits2);
const totalMinorCredits = sumMinorCredits(minorCredits1, minorCredits2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Output: Total Major Credits: 50
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Output: Total Minor Credits: 15

