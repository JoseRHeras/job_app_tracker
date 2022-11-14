import "./App.css";

// components
import AppliedJobList from "./components/AppliedJobList";
import AddNewJobPost from "./components/AddNewJobPost";
import PendingJobList from "./components/PendingJobList";

function App() {
  return (
    <div className="App">
      <AddNewJobPost />
      <AppliedJobList />
      <PendingJobList /> 
    </div>
  );
}

export default App;
