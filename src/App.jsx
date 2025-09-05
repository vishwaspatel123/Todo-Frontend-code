import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoitemContextProvider from "./store/Todo-items-context";

function App() {
  return (
    <TodoitemContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-start py-8 px-2">
        <div className="w-full max-w-3xl">
          <Title />
          <AddTodo />
          <TodoItems />
        </div>
      </div>
    </TodoitemContextProvider>
  );
}

export default App;
