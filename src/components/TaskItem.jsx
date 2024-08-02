import { MdDeleteSweep } from "react-icons/md";

export default function TaskItem({ todo, handleDeleteTask, handleCheckTask }) {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => handleCheckTask(todo.title)}
        />
        <p className={todo.isComplete? 'isChecked' : ''}>{todo.title}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => handleDeleteTask(todo.title)}
      />
    </li>
  );
}
