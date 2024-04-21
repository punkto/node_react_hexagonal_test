// Usage examples:
// npm start -- add --name "Jon Doe"

import yargs from "yargs";
import * as fs from "fs";

import StudyingGroupController from "../../controllers/StudyingGroupController";
import StudyingGroup from "../../data_model/StudyingGroup";

yargs
  .command(
    "add",
    "Add a student",
    (yargs) => {
      return yargs
        .option("name", {
          describe: "Name of the student",
          type: "string",
          demandOption: true,
        })
        .option("file", {
          describe: "File to process",
          type: "string",
          demandOption: true,
        });
      // Add other options as needed
    },
    (argv) => {
      console.log("Adding student with name: ", argv.name);

      const fileContent = fs.readFileSync(argv.file, "utf8");
      console.log("File content: ", fileContent);

      const studyingGroupController = new StudyingGroupController();
      const studyingGroup =
        studyingGroupController.parseStudyingGroup(fileContent);

      studyingGroupController.addStudentWithName(studyingGroup, argv.name);

      console.log(studyingGroup);

      // Write the updated studying group back to the file
      fs.writeFileSync(argv.file, JSON.stringify(studyingGroup, null, 2));
    }
  )
  // Add other commands as needed
  .help().argv;
