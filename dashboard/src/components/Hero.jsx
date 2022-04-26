import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div>ALL</div>
        <div>Live</div>
        <div>Draft</div>
        <div>Archive</div>

        <select id="farm">
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="meat">Meat</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
