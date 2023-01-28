import { Link } from "react-router-dom";

import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">
          {item.distance}metres from destination
        </span>
        <h1 className="siTitle">{item.type}</h1>
        <span className="siTaxiOp">{item.type}</span>
        <span className="siSubtitle">Cool sunset view</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">You can cancel later!!</span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">Rs{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

// const history = useHistory();

// const handleAdd = (item) => {
//   onAdd(item);
//   history.push("/package");
// };

// const SearchItem = ({ item, onAdd }) => {
//   return (
//     <div className="searchItem">
//       <img src={item.photos[0]} alt="" className="siImg" />
//       <div className="siDesc">
//         <h1 className="siTitle">{item.name}</h1>
//         <span className="siDistance">{item.distance}m from center</span>
//         <span className="siTaxiOp">Free airport taxi</span>
//         <span className="siSubtitle">
//           Studio Apartment with Air conditioning
//         </span>
//         <span className="siFeatures">{item.desc}</span>
//         <span className="siCancelOp">Free cancellation </span>
//         <span className="siCancelOpSubtitle">
//           You can cancel later, so lock in this great price today!
//         </span>
//       </div>
//       <div className="siDetails">
//         {item.rating && (
//           <div className="siRating">
//             <span>Excellent</span>
//             <button>{item.rating}</button>
//           </div>
//         )}
//         <div className="siDetailTexts">
//           <span className="siPrice">${item.cheapestPrice}</span>
//           <span className="siTaxOp">Includes taxes and fees</span>
//           <Link to={`/hotels/${item._id}`}>
//             <button className="siCheckButton">See availability</button>
//           </Link>
//           <Link to={"/package"}>
//             <button onClick={() => onAdd(item)} className="siAddButton">
//               Add
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchItem;
