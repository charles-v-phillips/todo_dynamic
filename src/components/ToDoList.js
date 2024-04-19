import { useState } from "react";

function ToDoListElement({ id, text, completed, toggleCompleted }) {
  let completed_text;
  if (completed) {
    completed_text = "Completed";
  } else {
    completed_text = "In Progress";
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      {id} {text} {completed_text}
    </div>
  );
}

function ToDoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        console.log(task);
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function addTask(text) {
    const t = { id: tasks.length + 1, text: text, completed: false };
    setTasks([t, ...tasks]);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add</button>
      {tasks.map((task) => (
        <ToDoListElement
          id={task.id}
          text={task.text}
          completed={task.completed}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

export default ToDoList;
