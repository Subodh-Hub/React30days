import { useReducer, useState } from "react";
import { initialState, counterReducer } from "./counterReducer";
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const inccrementByAmount = () => {
    dispatch({ type: "increaseBy", payload: Number(inputValue) });
    setInputValue(0);
  };
  const decrementByAmount = () => {
    dispatch({ type: "decreaseBy", payload: Number(inputValue) });
    setInputValue(0);
  };
  return (
    <div>
      App
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <hr />
      <input
        type="number"
        placeholder="Enter a Number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={inccrementByAmount}>Increase By</button>
      <button onClick={decrementByAmount}>Decrease By</button>
    </div>
  );
};

export default App;
