import React from "react";
interface PersonListProps {
  names: {
    first: string;
    last: string;
  }[];
}
const PersonList: React.FC<PersonListProps> = ({ names }) => {
  return (
    <div>
      <h1>Names are:</h1>
      <ol>
        {names.map((name) => (
          <li key={name.first}>
            {name.first} {name.last}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PersonList;
