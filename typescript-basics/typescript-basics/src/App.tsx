import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import HeadingReact from "./components/HeadingReact";

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
    </div>
  );
}

export default App;
