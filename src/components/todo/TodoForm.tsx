import React, { ChangeEvent, useContext } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: e.target.title.value });
    e.target.reset(); // Clear the form input after submission
  };

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold text-center mb-5">Todo List</h1>
        <form onSubmit={handleSubmit} className="mb-5">
          <input
            className="border border-gray-300 rounded w-full p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            name="title"
            placeholder="Enter todo title"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
