import { dummyBusinesses } from "./business";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      {dummyBusinesses.map((business, index) => (
        <div className="featuredItem" key={index}>
          <img src={business.imageUrl} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>{business.name}</h1>
            <h2>{business.description}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
