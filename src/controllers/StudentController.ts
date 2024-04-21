// Controller for Student
//
// The StudentController class is a controller for the Student model. It has methods to increase and decrease the grade of a student. The increaseGrade and decreaseGrade methods are used to update the grade of a student. The StudentController class is used to interact with the Student model and update the grade of a student.
import Student from '../data_model/Student';

class StudentController {
  // Increase the grade of a student, that is a student object
  increaseGrade(student: Student) {
    if (student.grade === "A") {
      student.grade = "A";
    } else if (student.grade === "B") {
      student.grade = "A";
    } else if (student.grade === "C") {
      student.grade = "B";
    } else if (student.grade === "D") {
      student.grade = "C";
    } else if (student.grade === "F") {
      student.grade = "D";
    } else {
      student.grade = "A";
    }
    return student;
  }

  // Decrease the grade of a student
  decreaseGrade(student: Student) {
    if (student.grade === "A") {
      student.grade = "B";
    } else if (student.grade === "B") {
      student.grade = "C";
    } else if (student.grade === "C") {
      student.grade = "D";
    } else if (student.grade === "D") {
      student.grade = "F";
    } else {
      student.grade = "F";
    }
    return student;
  }
}

export default StudentController;
