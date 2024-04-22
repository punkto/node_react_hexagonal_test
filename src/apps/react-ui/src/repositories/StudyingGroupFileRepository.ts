// Definition: This file contains the implementation of the StudyingGroupFileRepository class, where file
// operations are performed to read and write studying group data.
// The file is placed inside react-ui folder because it is a repository class that interacts with the file system.

import StudyingGroup from "@data_model/StudyingGroup";
import StudyingGroupController from "@controllers/StudyingGroupController";

class StudyingGroupFileRepository {
  // Read the content of a file and return it as a StudyingGroup object
  static readStudyingGroupFromFile(file: any): Promise<StudyingGroup> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          if (
            !event.target ||
            !event.target.result ||
            typeof event.target.result !== "string"
          ) {
            console.error("Failed to read file content");
            resolve(StudyingGroupController.get_empty_studying_group());
            return;
          }

          const result = JSON.parse(event.target.result);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => reject(error);

      reader.readAsText(file);
    });
  }
}

export default StudyingGroupFileRepository;
