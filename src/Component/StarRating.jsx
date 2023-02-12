import { useState } from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const EMPTY_STAR = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
  const FULL_STAR = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (index) => {
    onRatingChange(index + 1)
   };

  const renderStar = (index) => {
    let star = EMPTY_STAR;
    if (index <= (hover || rating) - 1) {
      star = FULL_STAR;
    }
    return (
      <img
        src={star}
        alt="star"
        width={17} height={17}
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
      />
    );
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => renderStar(index))}
    </div>
  );
};
export default StarRating
