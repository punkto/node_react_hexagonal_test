import "./App.css";
import StudyingGroupComponent from "./components/StudyingGroupComponent";
import React, { useState } from "react";
import StudyingGroupFileRepository from "./repositories/StudyingGroupFileRepository";

function App() {
  const [studyingGroup, setStudyingGroup] = useState({
    name: "Group 1",
    students: [],
  });

  const handleFileRead = (e) => {
    const file = e.target.files[0];
    StudyingGroupFileRepository.readStudyingGroupFromFile(file)
      .then((newStudyingGroup) => {
        setStudyingGroup(newStudyingGroup);
      })
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileRead} title="Upload JSON file" />
      <StudyingGroupComponent studyingGroup={studyingGroup} />
    </div>
  );
}

export default App;
