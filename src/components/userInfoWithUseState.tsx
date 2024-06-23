/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

//* user = {name : "xyz",age: 67, hobbies: ['hello']}

type TUser = {
  name: string;
  age: string;
  hobbies: string[];
};

const userInfoWithUseState = () => {
  const [user, setUser] = useState<TUser>({ name: "", age: "0", hobbies: [] });

  console.log(user);

  return (
    <div>
      <form className="flex flex-col justify-center items-center">
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border border-purple-300 m-5 p-2"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          className="border border-purple-300 m-5 p-2"
          type="number"
          name="age"
          placeholder="age"
        />
        <input
          onBlur={(e) => setUser({ ...user, hobbies: [...user.hobbies,e.target.value] })}
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

export default userInfoWithUseState;
