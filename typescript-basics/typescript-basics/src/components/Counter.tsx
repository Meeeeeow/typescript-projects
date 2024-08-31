import React from "react";
import { useReducer } from "react";

interface CounterProps {
  count: number;
}
//discriminated union
interface UpdateActionProps {
  type: "increment" | "decrement";
  payload: number;
}
interface ResetActionProps {
  type: "reset";
}
type CounterActionProps = UpdateActionProps | ResetActionProps;
//why use types? ans: types can define unions, intersections, and more complex types that go beyond just object shapes while interface can only define shape of objects and supports inheritance
const Counter = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state: CounterProps, action: CounterActionProps) => {
    switch (action.type) {
      case "increment":
        return {
          //   count: state.count + (action.payload || 0),
          count: state.count + action.payload,
        };
      case "decrement":
        return {
          count: state.count - action.payload,
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 10 });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: 10 });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <h1> Count is: {state.count}</h1>
      <div
        style={{
          display: "flex",
          maxWidth: "300px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button onClick={handleIncrement}>Increment by 10</button>
        <button onClick={handleDecrement}>Decrement by 10</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
