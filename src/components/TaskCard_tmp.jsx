import { useTask } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { updateTask, deleteTask } = useTask();

  return (
    <div className="p-4 mt-3 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Task Title */}
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>

      {/* Task Description */}
      <p className="text-gray-600 mt-1 text-sm">{task.description}</p>

      {/* Status Dropdown */}
      <select
        className="w-full mt-3 p-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring focus:ring-blue-300"
        value={task.status}
        onChange={(e) => updateTask(task.id, e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Delete Button */}
      <button
        className="w-full mt-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        onClick={() => deleteTask(task.id)}
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskCard;
