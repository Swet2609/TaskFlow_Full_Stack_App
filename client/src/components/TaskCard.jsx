import React from "react";

export const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-meta">
        <span className={`status ${task.status}`}>{task.status}</span>
        <span className={`priority ${task.priority}`}>{task.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)} className="btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
