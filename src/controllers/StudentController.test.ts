import StudentController from "./StudentController";
import Student from "../data_model/Student";
import Grade from "../data_model/Grade";

describe("StudentController", () => {
  let student: Student;

  beforeEach(() => {
    student = new Student("John Doe", 20, Grade.C);
  });

  describe("increaseGrade", () => {
    it("should increase the grade of a student", () => {
      student.grade = Grade.C;
      StudentController.increaseGrade(student);
      expect(student.grade).toBe(Grade.B);
    });

    it("should not increase the grade of a student with grade A", () => {
      student.grade = Grade.A;
      StudentController.increaseGrade(student);
      expect(student.grade).toBe(Grade.A);
    });
  });

  describe("decreaseGrade", () => {
    it("should decrease the grade of a student", () => {
      student.grade = Grade.B;
      StudentController.decreaseGrade(student);
      expect(student.grade).toBe("C");
    });

    it("should not decrease the grade of a student with grade F", () => {
      student.grade = Grade.F;
      StudentController.decreaseGrade(student);
      expect(student.grade).toBe(Grade.F);
    });
  });

});
