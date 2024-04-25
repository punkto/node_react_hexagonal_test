import React from "react";

import StudyingGroupController from "@controllers/StudyingGroupController";

function StudyingGroupStringModalComponent(
  { isOpen, studyingGroup, onClose } = {
    isOpen: false,
    studyingGroup: StudyingGroupController.get_empty_studying_group(),
    onClose: () => {},
  }
) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <pre style={{ whiteSpace: "pre-wrap" }}>
        {StudyingGroupController.get_studying_group_to_string(studyingGroup)}
        </pre>
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default StudyingGroupStringModalComponent;
