import { createContext, useState } from "react";
import { useEffect } from "react";
import {
  additem,
  getitem,
  deleteitem,
  completeditem,
  updateitem,
  gettask,
} from "../services/itemServices";

const TodoitemContext = createContext({
  tasks: [],
  taskbyid: {},
  newTasks: () => {},
  deletetask: () => {},
  completedtask: () => {},
  updateTask: () => {},
  gettaskbyid: () => {},
});

const TodoitemContextProvider = ({ children }) => {
  const [tasks, settasks] = useState([]);
  const [taskbyid, settaskbyid] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getitem();
      settasks(items);
    };
    fetchItems();
  }, []);

  const newTasks = async (taskname, taskdate) => {
    const service = await additem(taskname, taskdate);
    settasks((prev) => [...prev, service]);
  };

  const deletetask = async (id) => {
    await deleteitem(id);
    settasks((prev) => prev.filter((task) => task._id !== id));
  };

  const completedtask = async (id, complete) => {
    await completeditem(id, complete);
    settasks((prev) =>
      prev.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const gettaskbyid = async (id) => {
    const tasks = await gettask(id);
    settaskbyid(tasks);
  };

  const updateTask = async (id, task, date) => {
    await updateitem(id, task, date);
    settasks((prev) =>
      prev.map((prevTask) =>
        prevTask._id === id ? { ...prevTask, task: task, date: date } : prevTask
      )
    );
    settaskbyid({});
  };

  return (
    <TodoitemContext.Provider
      value={{
        tasks,
        taskbyid,
        newTasks,
        deletetask,
        completedtask,
        updateTask,
        gettaskbyid,
      }}
    >
      {children}
    </TodoitemContext.Provider>
  );
};

export default TodoitemContextProvider;
export { TodoitemContext };
