import React, { useState } from "react";
import TodoItem from "./todoItem.js";
function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: "2",
      text: "Meeting at school",
      completed: false,
    },
  ]);
  // add task; clarify addText
  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText("");
  }

  // Delete id, leave tasks 变量的类型在运行时决定

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // toggle completed 修改某个元素返回新的数组,
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          // 复制旧的，那看来还是在每一步上改
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  // 组件页面了
  return (
    <div className="to-do-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
      <div className="todo-input-area">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;
