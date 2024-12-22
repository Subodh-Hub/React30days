import { useState } from "react";

function App() {
  const [car, setCar] = useState({
    make: "Ford",
    model: "Mustang",
    year: 2024,
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleCarNameChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange() {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <>
      <p>
        This Car is {car.make} with {car.model} made in {car.year}
      </p>
      <input
        type="text"
        placeholder="Car Name"
        onChange={handleCarNameChange}
      />
      <br />
      <input type="text" placeholder="Car Model" onChange={handleModelChange} />
      <br />
      <input
        type="number"
        value={car.year}
        placeholder="Year"
        onChange={handleYearChange}
      />
      <br />
    </>
  );
}
export default App;
