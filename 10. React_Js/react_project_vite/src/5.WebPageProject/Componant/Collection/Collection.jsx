import React from "react";
import flexImage01 from "../../Logo/flexImage01.webp";
import flexImage02 from "../../Logo/flexImage02.webp";
import flexImage03 from "../../Logo/flexImage03.webp";
import flexImage04 from "../../Logo/flexImage04.webp";
import { Star, StarOff } from "lucide-react";
import './collection.css'

export default function Collection() {
  return (
    <>
      <div className="container mb-5">
        <h3 className="fs-4 fw-5">OUR COLLECTIONS</h3>
      </div>
      <div className="container d-flex justify-content-between ">
        <div className="main-div">
          <img src={flexImage01} alt="" />
            <div className="div-absolute">Sale 38%</div>
          <div className="text-center">
            <p>
              {[1, 2, 3, 4].map((e) => {
                return <Star color="#e4b611" role="button" />;
              })}
              <StarOff color="#e4b611" role="button"/>{" "}
            </p>
            <p>Fitpack Neo</p>
            <span className="colorSpan">Rs. 1,799.00</span>{" "}
            <span style={{ textDecoration: "line-through" }}>Rs. 2,899.00</span>
          </div>
        </div>
        <div className="main-div">
          <img src={flexImage02} alt="" />
          <div className="div-absolute">Sale 33%</div>
          <div className="text-center">
            <p>
              {[1, 2, 3, 4].map((e) => {
                return <Star color="#e4b611" role="button"/>;
              })}
              <StarOff color="#e4b611" role="button"/>
            </p>
            <p>Accelerator</p>
            <span className="colorSpan">Rs. 1,599.00</span>{" "}
            <span style={{ textDecoration: "line-through" }}>Rs. 2,399.00</span>
          </div>
        </div>
        <div className="main-div">
          <img src={flexImage03} alt="" />
          <div className="div-absolute">Sale 40%</div>
          <div className="text-center">
            <p>
              {[1, 2, 3, 4].map((e) => {
                return <Star color="#e4b611" role="button" />;
              })}
              <StarOff color="#e4b611" role="button" />
            </p>
            <p>Amigo Backpack</p>
            <span className="colorSpan">Rs. 1,979.00</span>{" "}
            <span style={{ textDecoration: "line-through" }}>Rs. 3,299.00</span>
          </div>
        </div>
        <div className="main-div">
          <img src={flexImage04} alt="" />
          <div className="div-absolute">Sale 40%</div>
          <div className="text-center">
            <p>
              {[1, 2, 3, 4].map((e) => {
                return <Star color="#e4b611" role="button" />;
              })}
              <StarOff color="#e4b611" role="button"/>
            </p>
            <p>Amigo Bagpack</p>
            <span className="colorSpan">Rs. 1,799.00</span>{" "}
             <span style={{ textDecoration: "line-through" }}>Rs. 2,899.00</span>
          </div>
        </div>
      </div>
    </>
  );
}
