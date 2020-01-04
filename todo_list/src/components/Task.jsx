import React from "react";

export const Task = ({ task, ...props }) => {
  const ActionButton = () => (
    <div className="action-btn">
      {!task.done ? (
        <p onClick={props.doneTask}>✅</p>
      ) : (
        <p onClick={props.deleteTask}>❌</p>
      )}
    </div>
  );
  const className = "task" + (task.done ? " task-done" : "");

  return (
    <div className={className}>
      <p>
        {task.title}
        <ActionButton />
      </p>
    </div>
  );
};
