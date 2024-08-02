export default function Footer({ toDoList }) {
  return (
    <div className="stats">
      <p className="notify">{toDoList.length === 0 ? "You Got Every Thing! Ready To Go.." : `You Have ${toDoList.length} Task On Your List`}</p>
    </div>
  );
}
