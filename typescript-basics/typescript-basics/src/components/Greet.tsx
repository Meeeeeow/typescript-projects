import React from "react";
interface GreetProps {
  name: string;
  msgCounts?: number;
  isAuth: boolean;
}
const Greet: React.FC<GreetProps> = ({ name, msgCounts = 0, isAuth }) => {
  return (
    <div>
      {isAuth ? <h2>Hello {name}!</h2> : <h2>Hello Guest!</h2>}
      <p>You have {msgCounts} unread messages.</p>
    </div>
  );
};

export default Greet;
