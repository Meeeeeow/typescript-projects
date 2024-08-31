import React from "react";

interface ButtonProps {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => void;
}
const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <button
      onClick={(event) =>
        handleClick(
          event,
          "Hello From Child Component, invoking parent function from child component"
        )
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "10px",
        border: "2px solid black",
        backgroundColor: isHovered ? "#e0e0e0" : "#fff",
        color: "#333",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      Click Me
    </button>
  );
};

export default Button;
