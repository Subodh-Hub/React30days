import React, { useEffect } from "react";

const Calculator = () => {
  const [inputValues, setInputValues] = React.useState("");
  const clear = () => {
    setInputValues("");
  };
  const display = (value) => {
    setInputValues((prev) => prev + value);
  };
  const calculate = () => {
    setInputValues(eval(inputValues));
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      const allowedKeys = "0123456789+-*/.";
      if (allowedKeys.includes(event.key)) {
        display(event.key);
      } else if (event.key === "Enter"||"=") {
        calculate();
      } else if (event.key === "Backspace") {
        setInputValues((prev) => prev.slice(0, -1));
      }
      else if (event.key === "Escape") {
        clear();
      }
    };

    document.addEventListener("keyup", handleKeyPress);
    return () => document.removeEventListener("keyup", handleKeyPress);
  }, [display, calculate]);
  return (
    <div className="bg-black h-screen">
      <h1 className="text-white text-center text-6xl">Calculator</h1>
      <div className="px-5 border-gray-500 border-2 rounded-md lg:w-2/6 m-auto bg-white">
        <input
          type="text"
          className="h-20 w-full my-3 rounded-lg bg-gray-900 text-white text-3xl"
          value={inputValues}
          disabled
        />
        <div className="grid grid-cols-4 gap-2 my-3">
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold col-span-2"
            onClick={clear}
          >
            Ac
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("/")}
          >
            /
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("*")}
          >
            *
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("7")}
          >
            7
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("8")}
          >
            8
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("9")}
          >
            9
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("-")}
          >
            -
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("4")}
          >
            4
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("5")}
          >
            5
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("6")}
          >
            6
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("+")}
          >
            +
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("1")}
          >
            1
          </button>
          <button
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("2")}
          >
            2
          </button>
          <span
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("3")}
          >
            3
          </span>
          <span
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold row-span-2 justify-center"
            onClick={() => calculate()}
          >
            =
          </span>
          <span
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display(".")}
          >
            .
          </span>
          <span
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("0")}
          >
            0
          </span>
          <span
            className=" text-white hover:cursor-pointer hover:bg-indigo-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800 active:bg-violet-700 text-2xl text-center py-5 rounded-full bg-gray-900 font-semibold"
            onClick={() => display("00")}
          >
            00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
