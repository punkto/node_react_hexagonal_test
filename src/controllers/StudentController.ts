// Controller for Student
//
// The StudentController class is a controller for the Student model. It has methods to increase and decrease the grade of a student. The increaseGrade and decreaseGrade methods are used to update the grade of a student. The StudentController class is used to interact with the Student model and update the grade of a student.
import Grade from '../data_model/Grade';
import Student from '../data_model/Student';

class StudentController {
  static get_student_with_name(newStudentName: string) {
    // Complete with some default values
    return new Student(newStudentName, 20, Grade.C);
  }


  // Increase the grade of a student, that is a student object
  static increaseGrade(student: Student): void {
    if (student.grade === Grade.A) {
      student.grade = Grade.A;
    } else if (student.grade === Grade.B) {
      student.grade = Grade.A;
    } else if (student.grade === Grade.C) {
      student.grade = Grade.B;
    } else if (student.grade === Grade.D) {
      student.grade = Grade.C;
    } else if (student.grade === Grade.F) {
      student.grade = Grade.D;
    } else {
      student.grade = Grade.A;
    }
  }

  // Decrease the grade of a student
  static decreaseGrade(student: Student):void {
    if (student.grade === Grade.A) {
      student.grade = Grade.B;
    } else if (student.grade === Grade.B) {
      student.grade = Grade.C;
    } else if (student.grade === Grade.C) {
      student.grade = Grade.D;
    } else if (student.grade === Grade.D) {
      student.grade = Grade.F;
    } else {
      student.grade = Grade.F;
    }
  }
}

export default StudentController;
