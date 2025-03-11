const Button = ({ company, handleClick }) => {
  return (
    <button className="btns" onClick={handleClick} value={company}>
      {company}
    </button>
  );
};

export default Button;
