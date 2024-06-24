
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen flex  items-center justify-center bg-gray-100 ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
