import SearchItem from "../searchItem/SearchItem";
import React, { useState, useEffect } from "react";

const Package = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const storedPackages = JSON.parse(localStorage.getItem("packages"));
    if (storedPackages) {
      setPackages(storedPackages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("packages", JSON.stringify(packages));
  }, [packages]);

  const handleAdd = (item) => {
    setPackages([...packages, item]);
  };

  return (
    <div>
      <SearchItem onAdd={handleAdd} />
      <div>
        {packages.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
