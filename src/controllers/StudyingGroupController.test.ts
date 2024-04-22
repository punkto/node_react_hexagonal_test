// tests for the StudyingGroupController
import StudyingGroupController from "./StudyingGroupController";
import StudyingGroup from "../data_model/StudyingGroup";
import Student from "../data_model/Student";
import Grade from "../data_model/Grade";

describe("StudyingGroupController", () => {
  let studyingGroup: StudyingGroup;
  let student: Student;

  beforeEach(() => {
    studyingGroup = new StudyingGroup("Math", []);
    student = new Student("John Doe", 20, Grade.A);
  });

  describe("addStudent", () => {
    it("should add a student to the studying group", () => {
      StudyingGroupController.addStudent(studyingGroup, student);
      expect(studyingGroup.students).toContain(student);
    });
  });

  describe("removeStudent", () => {
    it("should remove a student from the studying group", () => {
      StudyingGroupController.addStudent(studyingGroup, student);
      StudyingGroupController.removeStudent(studyingGroup, student);
      expect(studyingGroup.students).not.toContain(student);
    });
  });
});
