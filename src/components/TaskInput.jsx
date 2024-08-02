import { useState } from "react";
export default function TaskInput({ addTask }) {
  const [task, setTask] = useState("");
  function handleInputValue(e) {
    setTask(e.target.value);
  }
  function handleAddTask(e) {
    e.preventDefault();
    if (task.trim() === '' || task.trim() === null) return;
    addTask(task);
    setTask("");
  }
  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="add your tasks..."
        value={task}
        onChange={handleInputValue}
      />
      <button disabled={task <= 0 ? true : false}>+</button>
    </form>
  );
}
