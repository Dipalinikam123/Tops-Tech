import React from "react";

export default function Square({ value, onClick }) {
  let symbolColor = value === "X" ? "#1B3C73" : "#FF407D";
  return (
    <>
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "2px solid #135D66",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontFamily: "sans-serif",
          fontWeight: "600",
          color: symbolColor 
        }}
        onClick={onClick}
      >
        {value}
      </div>
    </>
  );
}
