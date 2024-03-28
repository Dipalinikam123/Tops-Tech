import React from "react";

export default function StoryStar({ handleStarClick, rating }) {
  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <span>Give the Review:</span>
        <div>
          {[1, 2, 3, 4, 5].map((e, i) => (
            <span
              key={i}
              onClick={() => handleStarClick(e)}
              style={{
                cursor: "pointer",
                color: i < rating ? "gold" : "gray",
                fontSize: "45px",
              }}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
