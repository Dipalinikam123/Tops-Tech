import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Review";

export default function MainFileReview() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="w-100 m-5">
      <ReviewForm addReview={addReview} />
      <hr />
      <Reviews reviews={reviews} />
    </div>
  );
}
