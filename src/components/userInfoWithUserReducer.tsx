import React, { ChangeEvent, useReducer } from "react";
//* user = {name : "xyz",age: 67, hobbies: ['hello']}

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

type TAction = {
    type : string;
    payload : string
}

const reducer = (currentState: typeof initialState, action:TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return { ...currentState, hobbies: [...currentState.hobbies,action.payload] };

    default:
      return currentState;
  }
};

const UserInfoWithUserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(state);
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
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
            dispatch({ type: "addAge", payload: e.target.value })
          }
          className="border border-purple-300 m-5 p-2"
          type="number"
          name="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
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
