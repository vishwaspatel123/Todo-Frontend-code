import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoitemContext } from "../store/Todo-items-context";

function AddTodo() {
  const { newTasks } = useContext(TodoitemContext);
  const taskname = useRef("");
  const taskdate = useRef("");

  const handleonClick = (event) => {
    event.preventDefault();
    const name = taskname.current.value;
    const date = taskdate.current.value;
    taskname.current.value = "";
    taskdate.current.value = "";
    newTasks(name, date);
  };

  return (
    <div className="flex justify-center mt-8">
      <form
        className="flex flex-col md:flex-row items-center gap-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl border border-gray-100"
        onSubmit={handleonClick}
      >
        <input
          type="text"
          name="items"
          id="items"
          ref={taskname}
          placeholder="Enter your task"
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-base shadow-sm"
        />
        <input
          type="date"
          ref={taskdate}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-base shadow-sm"
        />
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          title="Add Task"
        >
          <MdAddBox size={24} />
          <span className="hidden md:inline">Add</span>
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
