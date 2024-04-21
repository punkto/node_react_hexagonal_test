import StudentController from "./StudentController";
import Student from "../data_model/Student";

describe("StudentController", () => {
  let studentController: StudentController;
  let student: Student;

  beforeEach(() => {
    studentController = new StudentController();
    student = new Student("John Doe", 20, "A");
  });

  describe("increaseGrade", () => {
    it("should increase the grade of a student", () => {
      student.grade = "B";
      studentController.increaseGrade(student);
      expect(student.grade).toBe("A");
    });

    it("should not increase the grade of a student with grade A", () => {
      student.grade = "A";
      studentController.increaseGrade(student);
      expect(student.grade).toBe("A");
    });
  });

  describe("decreaseGrade", () => {
    it("should decrease the grade of a student", () => {
      student.grade = "A";
      studentController.decreaseGrade(student);
      expect(student.grade).toBe("B");
    });

    it("should not decrease the grade of a student with grade F", () => {
      student.grade = "F";
      studentController.decreaseGrade(student);
      expect(student.grade).toBe("F");
    });
  });

});
