import React, { useEffect, useState } from "react";
import "./storyrev.css";

import StoryInput from "./StoryInput";
import StoryPage from "./StoryPage";
import DisplayRating from "./DisplayRating";

const intialState = {
  title: "",
  description: "",
};

export default function StoryAllComponant({ id, story, img }) {
  const [rating, setRating] = useState("");
  const [text, setText] = useState(intialState);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let jsonData = localStorage.getItem("story");
    let normalData = JSON.parse(jsonData) || [];
    setReviews(normalData);
  }, []);

  const handleStarClick = (value) => {
    setRating(value);
    // setShowInput(true);
  };

  const submitHandeler = () => {
    let data = [...reviews, { ...text, storyId: id,rating }];
    setReviews(data);
    localStorage.setItem("story", JSON.stringify(data));
    setText(intialState);
  };
  const resetHandeler=()=>{
    setText(intialState)
    setRating("")
  }

  const deleteHandeler = (index) => {
    console.log("🚀 ~ deleteHandeler ~ index:", index);
    let deleteItem = reviews?.filter((e, i) => i !== index);
    console.log("🚀 ~ deleteHandeler ~ deleteItem:", deleteItem);
    // alert("Really want to Delete...?"); //TODO tetsts
    setReviews(deleteItem);
    localStorage.setItem("story", JSON.stringify(deleteItem));
  };

  function test(params) {
    console.log("🚀 ~ test ~ test:", test);
  }
  return (
    <div className="p-3">
    <div className="border border-dark border-2 p-3 mb-5 mt-5">
      
      <StoryPage reviews={reviews} story={story} img={img} />
      <div className="d-flex h-auto">
        <StoryInput
          handleStarClick={handleStarClick}
          rating={rating}
          submitHandeler={submitHandeler}
          setText={setText}
          resetHandeler={resetHandeler}
          text={text}
          />
        <DisplayRating
          reviews={reviews.filter((e) => e?.storyId === id)}
          deleteHandeler={deleteHandeler}
          />
      </div>
    </div>
          </div>
  );
}
