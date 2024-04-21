import './App.css';
import StudyingGroupComponent from "./components/StudyingGroupComponent";

function App() {
  return (
    <div className="App">
      <StudyingGroupComponent
        studyingGroup={{
          name: "Group 1",
          students: [],
        }}
      />
    </div>
  );
}

export default App;
