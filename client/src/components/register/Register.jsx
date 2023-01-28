import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [hotel, setHotel] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    distance: "",
    photos: [],
    title: "",
    description: "",
    rooms: [],
    cheapestPrice: "",
    featured: false,
  });

  const handleChange = (event) => {
    setHotel({ ...hotel, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/hotels",
        hotel
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={hotel.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={hotel.type}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={hotel.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={hotel.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Distance:
        <input
          type="text"
          name="distance"
          value={hotel.distance}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={hotel.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={hotel.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Cheapest Price:
        <input
          type="text"
          name="cheapestPrice"
          value={hotel.cheapestPrice}
          onChange={handleChange}
        />
      </label>
      <label>
        Featured:
        <input
          type="checkbox"
          name="featured"
          checked={hotel.featured}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default Register;
