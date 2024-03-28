import React from "react";

export default function StoryPage({ story, img }) {
  return (
    <div>
      <div className="d-flex border p-4 rounded-2 m-4">
        <img style={{ maxWidth: "40vw", maxHeight: "40vh" }} src={img} alt="" />
        <div
          style={{ maxHeight: "40vh", width: "100%" }}
          className=" w-100 ps-3 overflow-auto"
        >
          {story}
        </div>
      </div>
    </div>
  );
}
