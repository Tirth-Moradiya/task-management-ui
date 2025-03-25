import { useTask } from "../context/TaskContext";
import TaskCard from "./TaskCard_tmp";

const TaskList = () => {
  const { tasks } = useTask();

  const statusColors = {
    "To Do": "bg-gray-100 border-gray-300",
    "In Progress": "bg-blue-100 border-blue-300",
    Done: "bg-green-100 border-green-300",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
      {["To Do", "In Progress", "Done"].map((status) => (
        <div
          key={status}
          className={`p-5 border rounded-lg shadow-md ${statusColors[status]}`}
        >
          {/* Section Header */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            {status}
          </h2>

          {/* Task List */}
          <div className="space-y-4">
            {tasks.filter((task) => task.status === status).length > 0 ? (
              tasks
                .filter((task) => task.status === status)
                .map((task) => <TaskCard key={task.id} task={task} />)
            ) : (
              <p className="text-gray-500 text-center italic">No tasks yet</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
