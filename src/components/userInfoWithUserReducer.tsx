import React, { useReducer } from "react";
//* user = {name : "xyz",age: 67, hobbies: ['hello']}


const initialState = {
  name: "",
  age: "",
  hobbies: [],
};


const reducer = (currentState, action)=>{

    switch (action.type) {
        case "addName":
            
            return {...currentState, name : "Hello"};
    
        default:
            break;
    }

}

const UserInfoWithUserReducer = () => {


    const [state,dispatch] = useReducer(reducer,initialState)


  return (
    <div>
      <form className="flex flex-col justify-center items-center">
        <input
          className="border border-purple-300 m-5 p-2"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
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