// Controller for StudyingGroup
import StudyingGroup from "../data_model/StudyingGroup";
import Student from "../data_model/Student";
import StudentController from "./StudentController";

class StudyingGroupController {

  static get_studying_group_to_string(studyingGroup: StudyingGroup): string {
    return JSON.stringify(studyingGroup, null, 2);
  }

  static get_empty_studying_group(): StudyingGroup {
    return new StudyingGroup("", []);
  }

  // Parse a studying group from a JSON string into a StudyingGroup object
  static parseStudyingGroup(fileContent: string): StudyingGroup {
    if (!fileContent) {
      return new StudyingGroup("", []);
    }
    const unsanitized_studying_group = JSON.parse(fileContent);
    return StudyingGroupController.sanitizeStudyingGroup(
      unsanitized_studying_group
    );
  }

  static sanitizeStudyingGroup(unsanitized_studying_group: any): StudyingGroup {
    const sanitized_students = unsanitized_studying_group.students.map(
      (student: any) => {
        return StudentController.get_student(
          student.uuid,
          student.name,
          student.age,
          student.grade
        );
      }
    );
    if (!unsanitized_studying_group.name) {
      console.error(
        "A studying group's name cannot be empty. Using a default name."
      );
      unsanitized_studying_group.name = "A Studying Group";
    }
    return new StudyingGroup(
      unsanitized_studying_group.name,
      sanitized_students
    );
  }

  static addStudentWithName(
    studyingGroup: StudyingGroup,
    newStudentName: string
  ) {
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
