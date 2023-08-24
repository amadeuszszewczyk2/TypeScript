import "./App.css";
import { Task1 } from "./components/Task1";

function App() {
  return (
    <div>
      <Task1
        taskName="Task1"
        taskId={1}
        doTask={(jakisParametr) => jakisParametr}
      />
    </div>
  );
}

export default App;
