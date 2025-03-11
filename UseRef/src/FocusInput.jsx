import { useRef } from "react";
const FocusInput = () => {
  const inputRef = useRef(0);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value="Subodh"
  }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default FocusInput;
