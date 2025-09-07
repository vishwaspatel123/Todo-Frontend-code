import { useContext, useEffect, useState } from "react";
import { MdAddBox, MdUpdate } from "react-icons/md";
import { TodoitemContext } from "../store/Todo-items-context";

function AddTodo() {
  const { taskbyid, newTasks, updateTask } = useContext(TodoitemContext);
  const [taskValue, setTaskValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  let isEditing = !!taskbyid._id;

  useEffect(() => {
    if (isEditing) {
      setTaskValue(taskbyid.task || "");
      setDateValue(taskbyid.date ? taskbyid.date.slice(0, 10) : "");
    } else {
      setTaskValue("");
      setDateValue("");
    }
  }, [taskbyid, isEditing]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      updateTask(taskbyid._id, taskValue, dateValue);
    } else {
      newTasks(taskValue, dateValue);
    }
    setTaskValue("");
    setDateValue("");
  };

  return (
    <div className="flex justify-center mt-8">
      <form
        className="flex flex-col md:flex-row items-center gap-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl border border-gray-100"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="items"
          id="items"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          placeholder="Enter your task"
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-base shadow-sm"
        />
        <input
          type="date"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-base shadow-sm"
        />
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 ${
            isEditing
              ? "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-300"
              : "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300"
          }`}
          title={isEditing ? "Update Task" : "Add Task"}
        >
          {isEditing ? <MdUpdate size={24} /> : <MdAddBox size={24} />}
          <span className="hidden md:inline">
            {isEditing ? "Update" : "Add"}
          </span>
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
