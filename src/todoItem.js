import React, { useState } from "react";

// props: task, deleteTask, toggleCompleted-数据和函数
// checkbox改变时
function TodoItem({ task, deleteTask, toggleComplete }) {
  // 为什么大括号
  function handleChange() {
    toggleComplete(task.id);
  }

  return (
    <div className={`todoItem ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
export default TodoItem;
