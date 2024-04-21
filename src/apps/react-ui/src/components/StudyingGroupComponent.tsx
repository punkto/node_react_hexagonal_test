// A component that displays a studying group with students
import React, { useState } from "react";
import StudyingGroup from "@data_model/StudyingGroup";
import StudyingGroupController from "@controllers/StudyingGroupController";
import StudentComponent from "./StudentComponent";
import Student from "@data_model/Student";

// A functional component that displays the studying group's name and students
const StudyingGroupComponent = (props: { studyingGroup: StudyingGroup }) => {
  const [studyingGroup, setStudyingGroup] = useState(props.studyingGroup);
  const [newStudentName, setNewStudentName] = useState("");

  const addStudent = () => {
    const studyingGroupController = new StudyingGroupController();
    studyingGroupController.addStudentWithName(studyingGroup, newStudentName);
    setNewStudentName("");
  };

  const removeStudent = (student: Student) => {
    const studyingGroupController = new StudyingGroupController();
    studyingGroupController.removeStudent(studyingGroup, student);
    setStudyingGroup({ ...studyingGroup }); // Update the state to force a re-render
  };

  return (
    <div>
      <h1>Studying Group: {props.studyingGroup.name}</h1>
      <h2>Students:</h2>
      {studyingGroup.students.map((student, index) => (
        <div key={index}>
          <StudentComponent student={student} />
          <button onClick={() => removeStudent(student)}>Remove Student</button>
        </div>
      ))}
      <input
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
        placeholder="New student name"
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudyingGroupComponent;
