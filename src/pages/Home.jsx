import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-50">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Task Management
      </h1>

      {/* Task Input Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <TaskForm />
      </div>

      {/* Task List Section */}
      <TaskList />
    </div>
  );
};

export default Home;
