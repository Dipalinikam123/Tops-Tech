import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

// Sample data for accordion
const accordionData = [
  {
    title: "What is your return policy",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How do i track my order?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur cupiditate ipsum nisi deserunt.Lorem ipsum dolor sit amet consectetur ",
  },
  {
    title: "Can i purchase items again?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Accordion() {
  // State to manage which accordion is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle accordion title click
  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="text-center mt-2">Accordion</h2>
      <div
        className="border border-1 border-dark m-auto mt-5 p-4 w-50"
        style={{ backgroundColor: "lightcyan" }}
      >
        {accordionData.map((item, index) => (
          <div key={index} className="border border-dark mt-3">
            <div
              className="d-flex align-items-baseline justify-content-between w-100 p-2"
              style={{ backgroundColor: "lightgrey" }}
            >
              <div className=" mt-2 w-100 " style={{ cursor: "pointer" }}>
                {item.title}
              </div>
              <div>
                <span>
                  <ChevronDown
                    role="button"
                    onClick={() => handleAccordionClick(index)}
                  />
                </span>
              </div>
            </div>
            {/* Accordion Body */}
            <div className="ps-3 bg-light" style={{ display: openIndex === index ? "block" : "none" }}>
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
