import { useState } from "react";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useTask();
  const [task, setTask] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title) return;
    addTask({ ...task, id: Date.now(), status: "To Do" });
    setTask({ title: "", description: "" });
  };

  return (
    <form
      className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 w-full  mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Add New Task
      </h2>

      {/* Task Title Input */}
      <input
        type="text"
        placeholder="Enter Task Title"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none mb-3"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />

      {/* Task Description Input */}
      <textarea
        placeholder="Enter Task Description"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4 resize-none"
        rows="3"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
