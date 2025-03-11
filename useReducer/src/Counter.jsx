import { initialState, counterReducer } from "./counterReducer";
import { useReducer, useState } from "react";
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValues, setInputValues] = useState(0);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValues) });
    setInputValues(0);
  };
  const handleDecreaseByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValues) });
    setInputValues(0);
  };

  return (
    <>
      <div>Counter:{state.count}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <br />

      <input
        type="text"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
      />
      <br />
      <button onClick={handleIncreaseByAmount}>Add By Amount</button>
      <button onClick={handleDecreaseByAmount}>Subtract By Amount</button>
    </>
  );
};

export default Counter;
