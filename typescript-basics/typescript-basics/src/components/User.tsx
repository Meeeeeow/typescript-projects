import { useState } from "react";
import React from "react";
import { UserType } from "./UserType";
const User = () => {
  const [user, setUser] = useState<UserType | null>(null);
  //if null is not needed and we can confirm there will always be a value from useEffect for the user,then we can use type assertion as below
  // const [user, setUser] = useState<UserType>({} as UserType
  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "doe@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1>Welcome to the Page!</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>Welcome User with name: {user?.name}</h2>
      <h4>And your email is: {user?.email}</h4>
    </div>
  );
};

export default User;
