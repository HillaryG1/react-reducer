import React, { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      {/* Display the current count value from the state */}
      <h1>Counter: {state.count}</h1>
      {/* Dispatch an action to increment the count when this button is clicked */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
