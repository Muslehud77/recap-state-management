import React, { useContext } from 'react';
import { TTodo, TodoContext } from '../../context/TodoProvider';

const TodoList = () => {

    const {state,dispatch} = useContext(TodoContext)

    const handleComplete = (id:string)=>{
        dispatch({type:"addComplete",payload: id})
    }
    
    console.log(state);

    return (
      <>
        {state.length ? (
          <div className="space-y-4 ">
            {state.map((todo: TTodo) => (
              <div
                key={todo.id}
                className="p-4 border border-gray-200 rounded shadow-sm bg-gray-50"
              >
                <h2 className="text-lg font-semibold">ID: {todo.id}</h2>
                <p className="text-gray-700">Title: {todo.title}</p>
                <p className="text-gray-700">
                  Status:{" "}
                  <span
                    className={
                      todo.isCompleted ? "text-green-500" : "text-red-500"
                    }
                  >
                    {todo.isCompleted ? "Completed" : "Incomplete"}
                  </span>
                </p>
                {!todo.isCompleted && <button className='p-1 bg-green-300 rounded-md mt-2' onClick={()=>handleComplete(todo.id)}>Complete</button>}
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-center text-gray-500">There are no todos</h2>
        )}
      </>
    );
};

export default TodoList;