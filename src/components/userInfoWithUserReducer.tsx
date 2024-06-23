import React, { useReducer } from "react";
//* user = {name : "xyz",age: 67, hobbies: ['hello']}

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    default:
      break;
  }
};

const UserInfoWithUserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <form className="flex flex-col justify-center items-center">
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border border-purple-300 m-5 p-2"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border border-purple-300 m-5 p-2"
          type="number"
          name="age"
          placeholder="age"
        />
        <input
          className="border border-purple-300 m-5 p-2"
          type="text"
          name="hobbies"
          placeholder="hobbies"
        />
        <button type="submit" className="p-2 bg-purple-300 w-1/2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoWithUserReducer;
