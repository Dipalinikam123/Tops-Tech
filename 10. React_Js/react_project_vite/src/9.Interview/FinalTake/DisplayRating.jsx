import { Trash } from "lucide-react";
import React from "react";
import StoryStar from "./StoryStar";

export default function DisplayRating({ reviews, deleteHandeler }) {
  console.log("🚀 ~ DisplayRating ~ reviews:", reviews);
  return (
    <div className="rating-flow w-50  border rounded-3  p-2 overflow-auto ">
      {reviews.length === 0 ? (
        <h3 className="text-center mt-5">Review Not Found</h3>
      ) : (
        reviews?.map((e, i) => {
          const stars = [];
          console.log("🚀 ~ reviews?.map ~ stars:", stars);

          for (let i = 0; i < e.rating; i++) {
            stars.push(
              <span key={i} style={{ color: "gold" }}>
                &#9733;
              </span>
            );
          }
          return (
            <div
              key={i}
              className=" w-100 d-flex align-items-center  p-2 justify-content-between "
            >
              <div className="border border-dark mb-2 p-2 w-100 d-flex  align-items-center  ">
                <div className="w-50 text-center">
                  <p className="fs-5">Reviews:</p>
                  <h2>{stars}</h2>
                </div>
                <div className="w-50">
                  <p>Title:- {e.title}</p>
                  <p>Description:- {e.description}</p>
                </div>
              </div>
              <Trash
                role="button"
                color="red"
                onClick={() => deleteHandeler(i)}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
