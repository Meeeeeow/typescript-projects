import React, { useRef } from "react";

interface InputProps {
  value: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}

const Input: React.FC<InputProps> = ({ value, handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputRef);
    if (inputRef.current) {
      console.log(inputRef.current.value, "Submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={value}
          ref={inputRef}
          onChange={(event) => handleChange(event, 23)}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Input;
