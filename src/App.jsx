import React, { useState } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To do" icon={Todo} tasks={tasks} status="todo" />
        <TaskColumn title="Doing" icon={doing} tasks={tasks} status="doing" />
        <TaskColumn title="Done" icon={Done} tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
