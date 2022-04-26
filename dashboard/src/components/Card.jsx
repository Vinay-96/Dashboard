import React from "react";

const cardImages = [
  { src: "/images/helmet-1.png" },
  { src: "/images/potion-1.png" },
  { src: "/images/ring-1.png" },
  { src: "/images/scroll-1.png" },
  { src: "/images/shield-1.png" },
  { src: "/images/sword-1.png" },
  { src: "/images/sword-1.png" },
  { src: "/images/sword-1.png" },
];

function Card() {
  return (
    <div>
      <div className="card-container">
        {cardImages.map((item) => (
          <div className="row">
            <div className="card">
              <img
                src={"http://via.placeholder.com/300"}
                className="card-img-top"
                alt="///"
              />
              <div className="card-body">
                <span className="card-title">Mango</span>
                <p className="card-text">KING OF FRUITS</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Available</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      )
    </div>
  );
}

export default Card;
