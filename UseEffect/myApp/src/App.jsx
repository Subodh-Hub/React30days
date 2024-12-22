import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [isVisibleSize, setIsVisibleSize] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (isVisibleSize === false) {
      document.title = `Count: ${count} & ${color}`;
    } else {
      window.addEventListener("resize", handleResize);
      document.title = `Size :${width} X ${height}`;
      console.log("event listener added");
    }
  }, [count, color, width, height, isVisibleSize]);
  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor(color === "green" ? "red" : "green");
  }

  function changeSizeHandler() {
    setIsVisibleSize(!isVisibleSize);
  }

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      {isVisibleSize === false ? (
        <>
          <p style={{ color: color }}>Count : {count}</p>
          <button onClick={addCount}>Add</button>
          <button onClick={subtractCount}>Subtract</button>
          <br />
          <button onClick={changeColor}>Change Color</button>
          <button onClick={changeSizeHandler}>Get Width and Height</button>
        </>
      ) : (
        <>
          <p>
            {width}x{height}
          </p>
          <button onClick={changeSizeHandler}>Counter Program</button>
        </>
      )}
    </>
  );
}
export default App;
