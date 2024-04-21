// A Student react component, in functional form, that displays the student's name and age
import React, { useState } from "react";
import Student from '@data_model/Student';
import StudentController from '@controllers/StudentController';

// A functional component that displays the student's name, age and grade with a button to increase
// and decrease the grade
const StudentComponent = (props: { student: Student }) => {
  const [student] = useState(props.student);
  const [, setRenderCount] = useState(0);

  const increaseGrade = () => {
    const studentController = new StudentController();
    studentController.increaseGrade(student);
    setRenderCount((prevCount) => prevCount + 1);
  };

  const decreaseGrade = () => {
    const studentController = new StudentController();
    studentController.decreaseGrade(student);
    setRenderCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Name: {student.name}</h1>
      <h2>Age: {student.age}</h2>
      <h2>Grade: {student.grade}</h2>
      <button onClick={increaseGrade}>Increase Grade</button>
      <button onClick={decreaseGrade}>Decrease Grade</button>
    </div>
  );
};

export default StudentComponent;
