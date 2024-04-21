// Data model for a student

// A Student class that has a name, age, and grade
export class Student {
  name: string;
  age: number;
  grade: string;

  // Constructor for the Student class
  constructor(name: string, age: number = 23, grade: string = "A") {
    if (!name) {
      throw new Error("A student's name cannot be empty");
    }

    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

export default Student;
