import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {[...Array(star)].map((_, index) => (
            <AiFillStar key={index} className="rating-star" />
          ))}
          {/* <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" /> */}
          <span className="total-reviews">{reviews}</span>
        </section>
        <div className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            {newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
