import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
export default function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (title) => {
    const newTask = {
      title,
      isComplete: false,
    };
    setToDoList([...toDoList, newTask]);
  };

  function handleDeleteTask(taskTitle) {
    setToDoList(
      toDoList.filter((task) => {
        return task.title !== taskTitle;
      })
    );
  }

  function handleCheckTask(taskTitle) {
    setToDoList((prevTodos) =>
      prevTodos.map((task) =>
        task.title === taskTitle
          ? { ...task, isComplete: !task.isComplete }
          : task
      )
    );
  }

  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem("todos"));
    if (savedToDos) {
      setToDoList(savedToDos);
    }
  }, []);

  useEffect(() => {
    if (toDoList.length > 0) {
      localStorage.setItem("todos", JSON.stringify(toDoList));
    }
  }, [toDoList]);

  return (
    <>
      <div className="container">
        <h1>TODO LISt</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>Todo's</span>
          <ul className="list-items">
            {toDoList.map((todo, key) => (
              <TaskItem
                todo={todo}
                key={key}
                handleDeleteTask={handleDeleteTask}
                handleCheckTask={handleCheckTask}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Footer toDoList={toDoList} />
    </>
  );
}
