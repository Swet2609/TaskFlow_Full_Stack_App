import React from "react";

export const TaskForm = ({ task, onSubmit, loading }) => {
  const [formData, setFormData] = React.useState(task || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={formData.title || ""}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description || ""}
        onChange={handleChange}
      />
      <select
        name="priority"
        value={formData.priority || "medium"}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Task"}
      </button>
    </form>
  );
};

export default TaskForm;
