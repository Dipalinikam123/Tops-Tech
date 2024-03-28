import React from "react";
import StoryStar from "./StoryStar";

export default function StoryInput({
  submitHandeler,
  resetHandeler,
  setText,
  text,
  handleStarClick,
  rating,
}) {
  return (
    <>
      <div className="border p-3 w-50 d-flex gap-5 rounded-3 align-items-center">
        <StoryStar handleStarClick={handleStarClick} rating={rating} />
        {rating && (
          <div className=" d-flex flex-column w-100 mt-4">
            <form action="">

            <input
              className="w-100 p-1 mb-3 rounded-2 shadow-none"
              placeholder="Enter Review Title"
              type="text"
              value={text?.title}
              required
              onChange={(e) => setText({ ...text, title: e?.target?.value })}
              />
            <input
              className=" w-100 p-1 mb-3 rounded-2 shadow-none"
              placeholder="Enter description..."
              type="text"
              value={text?.description}
              required
              onChange={(e) =>
                setText({ ...text, description: e?.target?.value })
              }
              />
              </form>
            <div>
              <button
                style={{ width: "48%" }}
                className="bg-danger text-light rounded-3 border-0 p-2 mt-2 me-3"
                onClick={() => submitHandeler()}
              >
                Submit
              </button>
              <button
                style={{ width: "48%" }}
                className="bg-danger text-light rounded-3 border-0 p-2  mt-2"
                onClick={() => resetHandeler()}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
