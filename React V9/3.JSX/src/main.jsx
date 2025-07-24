import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza</h1>
      <Pizza
        name="Pepproni Pizza"
        description="Loaded with the slice of the hams"
        image={"/public/pizzas/pepperoni.webp"}
      />

      <Pizza
        name="Hawain pizza"
        description="Loaded with the pineapple topping stuff"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano pizza"
        description="Loaded with the slice of the american stuff"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
