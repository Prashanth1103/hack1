import React from "react";
import { data } from "./data";
import "./restaurant.css";
const Restaurant = () => {
  return (
    <div className="rest">
      {data.map((b, index) => (
        <div className="restem" key={index}>
          <img src={b.imageUrl} alt="" className="restImg" />
          <div className="restTitles">
            <h1>{b.name}</h1>
            <h2>{b.description}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
