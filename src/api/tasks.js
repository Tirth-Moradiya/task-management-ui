import axios from "axios";

export const fetchTasks = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return data.map((task) => ({
    id: task.id,
    title: task.title,
    description: "Sample Description",
    status: "To Do",
  }));
};
