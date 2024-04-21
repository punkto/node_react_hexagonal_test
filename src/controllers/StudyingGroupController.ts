// Controller for StudyingGroup
import StudyingGroup from "../data_model/StudyingGroup";
import Student from "../data_model/Student";

class StudyingGroupController {
  addStudentWithName(studyingGroup: StudyingGroup, newStudentName: string) {
    // Create a new student with the given name if the name is not empty
    if (!newStudentName) {
      console.error("A student's name cannot be empty. Did not add student.");
      return studyingGroup;
    }
    const student = new Student(newStudentName);
    studyingGroup.students.push(student);
    return studyingGroup;
  }


  // Add a student to the group
  addStudent(studyingGroup: StudyingGroup, student: Student) {
    studyingGroup.students.push(student);
    return studyingGroup;
  }

  // Remove a student from the group
  removeStudent(studyingGroup: StudyingGroup, student: Student) {
    studyingGroup.students = studyingGroup.students.filter(
      (s) => s !== student
    );
    return studyingGroup;
  }
}

export default StudyingGroupController;