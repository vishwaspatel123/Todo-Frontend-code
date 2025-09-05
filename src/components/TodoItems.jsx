import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoitemContext } from "../store/Todo-items-context";

function TodoItems() {
  const { tasks, deletetask } = useContext(TodoitemContext);
  return (
    <div className="space-y-4 px-4 py-6 max-w-2xl mx-auto">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="flex-1 text-left">
            <div className="text-lg font-semibold text-gray-800 truncate">
              {task.task}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {task.date ? new Date(task.date).toLocaleDateString() : ""}
            </div>
          </div>
          <button
            className="ml-4 p-2 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-200"
            onClick={() => deletetask(task._id)}
            title="Delete"
          >
            <MdDelete size={22} />
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoItems;
