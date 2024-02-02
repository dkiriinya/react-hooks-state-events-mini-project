import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory }) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Update the taskList when tasks prop changes
    setTaskList(tasks);
  }, [tasks]);

  const handleDelete = (taskId) => {
    // Filter out the task with the specified ID
    const updatedTaskList = taskList.filter((task) => task.text !== taskId);
    setTaskList(updatedTaskList);
  };

  const filteredTasks =
    selectedCategory === "All" ? taskList : taskList.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={() => handleDelete(task.text)} />
      ))}
    </div>
  );
}

export default TaskList;
