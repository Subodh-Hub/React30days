import { useState } from "react";

function App() {
  const [food, setFoods] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodName").value;
    document.getElementById("foodName").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function removeFood(index) {
    setFoods(food.filter((_, i) => i !== index));
  }

  return (
    <>
      <ul>
        {food.map((element, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {element}
          </li>
        ))}
      </ul>
      <input type="text" id="foodName" placeholder="Enter a food name" /> <br />
      <button onClick={handleAddFood}>Add</button>
    </>
  );
}
export default App;
