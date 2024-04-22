// Controller for StudyingGroup
import StudyingGroup from "../data_model/StudyingGroup";
import Student from "../data_model/Student";
import StudentController from "./StudentController";

class StudyingGroupController {
  static get_empty_studying_group(): StudyingGroup {
    return new StudyingGroup("", []);
  }

  // Parse a studying group from a JSON string into a StudyingGroup object
  static parseStudyingGroup(fileContent: string) {
    if (!fileContent) {
      return new StudyingGroup("", []);
    }
    return JSON.parse(fileContent);
  }

  static addStudentWithName(studyingGroup: StudyingGroup, newStudentName: string) {
    // Create a new student with the given name if the name is not empty
    if (!newStudentName) {
      console.error("A student's name cannot be empty. Did not add student.");
      return studyingGroup;
    }

    const student = StudentController.get_student_with_name(newStudentName);
    studyingGroup.students.push(student);
    return studyingGroup;
  }

  // Add a student to the group
  static addStudent(studyingGroup: StudyingGroup, student: Student) {
    studyingGroup.students.push(student);
    return studyingGroup;
  }

  // Remove a student from the group
  static removeStudent(studyingGroup: StudyingGroup, student: Student) {
    studyingGroup.students = studyingGroup.students.filter(
      (s) => s !== student
    );
    return studyingGroup;
  }
}

export default StudyingGroupController;
