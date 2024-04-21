// Data model for a StudyingGroup, that has a name and a list of students
import Student from "./Student";

class StudyingGroup {
  name: string;
  students: Student[];

  constructor(name: string, students: Student[]) {
    this.name = name;
    this.students = students;
  }
}

export default StudyingGroup;
