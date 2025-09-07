import { MdDelete, MdEdit } from "react-icons/md";
import { useContext } from "react";
import { TodoitemContext } from "../store/Todo-items-context";

function TodoItems() {
  const { tasks, deletetask, completedtask, gettaskbyid } =
    useContext(TodoitemContext);
  return (
    <div className="space-y-4 px-4 py-6 max-w-2xl mx-auto">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="flex items-center flex-1 text-left gap-4">
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => completedtask(task._id, task.completed)}
              readOnly
              className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-2 focus:ring-green-400 border-gray-300 transition duration-150"
              title={task.completed ? "Completed" : "Mark as complete"}
            />
            <div>
              <div
                className={`text-lg font-semibold truncate ${
                  task.completed
                    ? "text-green-600 line-through"
                    : "text-gray-800"
                }`}
              >
                {task.task}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {task.date ? new Date(task.date).toLocaleDateString() : ""}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors duration-200"
              onClick={() => gettaskbyid(task._id)}
              title="Edit"
            >
              <MdEdit size={22} />
            </button>
            <button
              className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-200"
              onClick={() => deletetask(task._id)}
              title="Delete"
            >
              <MdDelete size={22} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoItems;
