import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's Pizza</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
