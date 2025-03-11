import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button value="" onClick={handleClick} className="btns">
            All Product
          </button>

          <Button company="Nike" handleClick={handleClick} />
          <Button company="Adidas" handleClick={handleClick} />
          <Button company="Puma" handleClick={handleClick} />
          <Button company="Vans" handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Recommended;
