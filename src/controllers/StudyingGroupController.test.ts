// tests for the StudyingGroupController
import StudyingGroupController from "./StudyingGroupController";
import StudyingGroup from "../data_model/StudyingGroup";
import Student from "../data_model/Student";

describe("StudyingGroupController", () => {
  let studyingGroupController: StudyingGroupController;
  let studyingGroup: StudyingGroup;
  let student: Student;

  beforeEach(() => {
    studyingGroupController = new StudyingGroupController();
    studyingGroup = new StudyingGroup("Math", []);
    student = new Student("John Doe", 20, "A");
  });

  describe("addStudent", () => {
    it("should add a student to the studying group", () => {
      studyingGroupController.addStudent(studyingGroup, student);
      expect(studyingGroup.students).toContain(student);
    });
  });

  describe("removeStudent", () => {
    it("should remove a student from the studying group", () => {
      studyingGroupController.addStudent(studyingGroup, student);
      studyingGroupController.removeStudent(studyingGroup, student);
      expect(studyingGroup.students).not.toContain(student);
    });
  });
});
