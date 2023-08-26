import "./App.css";
import { Task1 } from "./components/Task1";
import { Task2 } from "./components/Task2";
import { Task3 } from "./components/Task3";
import { Task4 } from "./components/Task4";

function App() {
  return (
    <>
      <div>
        <Task1
          taskName="Task1"
          taskId={1}
          doTask={(jakisParametr) => jakisParametr}
        />
      </div>
      <br></br>
      <div>
        <Task2 />
      </div>
      <br></br>
      <div>
        <Task3 />
      </div>
      <br></br>
      <div>
        <Task4 />
      </div>
    </>
  );
}

export default App;
