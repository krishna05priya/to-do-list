import { useState } from "react";
import "./styles.css";

export default function App() {
  const [pending, setPending] = useState([
    "Learn HTML",
    "Learn CSS",
    "Learn JS",
    "Learn React",
    "Learn Express"
  ]);
  const [completed, setCompleted] = useState([]);

  return (
    <div classname="container">
      {/* todo list */}
      <div className="task-container">
        <h4>PENDING TASKS</h4>
        {/* js code will be inside{} */}
        {pending.map((task, index) => {
          return (
            <div className="task-card">
              {index + 1} {task}
              <button
                className="complete-btn"
                onClick={() => {
                  var p = [...pending];
                  var c = [...completed];

                  c.push(task);
                  setCompleted(c);

                  p.splice(index, 1);
                  setPending(p);
                }}
              >
                completed
              </button>
            </div>
          );
        })}
      </div>

      {/* completed list */}
      <div className="task-container">
        <h4>COMPLETED TASKS</h4>
        {completed.map((task, index) => {
          return <div className="task-card">{task}</div>;
        })}
      </div>
    </div>
  );
}
