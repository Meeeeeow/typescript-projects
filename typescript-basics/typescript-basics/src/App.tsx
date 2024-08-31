import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import HeadingReact from "./components/HeadingReact";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const names = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
  ];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => {
    console.log("Button Clicked", event, message);
  };
  return (
    <div className="App">
      <Greet name="Rahim" msgCounts={10} isAuth={false} />
      <Greet name="Kahim" isAuth={false} />
      <Person name={personName} />
      <PersonList names={names} />
      <Status statusText="success" />
      <Heading> This is children props going to children</Heading>
      <HeadingReact>
        <Heading> This is passing react component as props to children</Heading>
      </HeadingReact>
      <Button handleClick={handleClick} />
      <Input
        value="abc"
        handleChange={(event, id) => console.log("Changed", event, id)}
      />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          margin: "20px 10px",
        }}
      />
      <User />
      <Counter />
    </div>
  );
}

export default App;
