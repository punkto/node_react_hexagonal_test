// Data model for a student
import Grade from "./Grade";

// A Student class that has a name, age, and grade
export class Student {
  name!: string; // Name of the student, cannot be null
  age!: number; // Age of the student, cannot be null
  grade?: Grade; // Grade of the student, can be null

  // Constructor for the student object
  constructor(name: string, age: number, grade?: Grade) {
    //If name is not provided, throw an error
    if (!name || name.trim() === "") {
      throw new Error("Name cannot be empty");
    }
    this.name = name;
    // if age is not provided, set it to 19
    if (!age) {
      age = 19;
    } else {
      this.age = age;
    }
    // if grade is not provided, set it to Grade.F
    if (!grade) {
      grade = Grade.F;
    } else {
      this.grade = grade;
    }
  }

  // Runtime validation of the student object
  validate() {
    if (!this.name || this.name.trim() === "") {
      throw new Error("Name cannot be empty");
    }
    if (!this.age) {
      throw new Error("Age cannot be null");
    }
    if (this.age < 0) {
      throw new Error("Age cannot be negative");
    }
  }
}

export default Student;
