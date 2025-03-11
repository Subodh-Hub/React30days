import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test3" value="" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        name="test3"
        value="black"
        title="Black"
        color="black"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        value="blue"
        title="Blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        value="red"
        title="Red"
        color="red"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        value="green"
        title="Green"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          name="test3"
          value="white"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
