import { createContext, useState } from "react";
import { useEffect } from "react";
import { additem, getitem, deleteitem } from "../services/itemServices";

const TodoitemContext = createContext({
  tasks: [],
  newTasks: () => {},
  deletetask: () => {},
});

const TodoitemContextProvider = ({ children }) => {
  const [tasks, settasks] = useState([]);

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

  return (
    <TodoitemContext.Provider value={{ tasks, newTasks, deletetask }}>
      {children}
    </TodoitemContext.Provider>
  );
};

export default TodoitemContextProvider;
export { TodoitemContext };
