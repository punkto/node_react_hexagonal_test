import "./App.css";
import StudyingGroupComponent from "./components/StudyingGroupComponent";
import StudyingGroupStringModalComponent from "./components/StudyingGroupStringModalComponent";

import React, { useState } from "react";
import StudyingGroupFileRepository from "./repositories/StudyingGroupFileRepository";

function App() {
  const [studyingGroup, setStudyingGroup] = useState({
    name: "Group 1",
    students: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileRead = (e) => {
    const file = e.target.files[0];
    StudyingGroupFileRepository.readStudyingGroupFromFile(file).then(
      (newStudyingGroup) => {
        setStudyingGroup(newStudyingGroup);
      }
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Import a group</h1>
      <input type="file" onChange={handleFileRead} title="Upload JSON file" />
      <h1>Export a group</h1>
      <button onClick={handleOpenModal}>Show JSON</button>
      <StudyingGroupStringModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        studyingGroup={studyingGroup}
      ></StudyingGroupStringModalComponent>
      <h1>Edit group</h1>
      <StudyingGroupComponent studyingGroup={studyingGroup} />
    </div>
  );
}

export default App;
