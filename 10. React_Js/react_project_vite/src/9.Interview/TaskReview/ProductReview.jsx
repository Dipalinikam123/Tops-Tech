// // import React, { useState } from "react";
// // import {
// //   Button,
// //   Card,
// //   CardBody,
// //   CardSubtitle,
// //   CardText,
// //   CardTitle,
// // } from "reactstrap";

// // import img1 from "../../0.Images/bike.jpeg";
// // import img2 from "../../0.Images/fruitesImage.jpg";
// // import img3 from "../../0.Images/Background.jpg";
// // import img4 from "../../0.Images/camera.jpg";
// // import ReviewInput from "./ReviewInput";

// // const cardArr = [
// //   {
// //     img: img1,
// //     button: "Give Review",
// //   },
// //   {
// //     img: img2,
// //     button: "Give Review",
// //   },
// //   {
// //     img: img3,
// //     button: "Give Review",
// //   },
// //   {
// //     img: img4,
// //     button: "Give Review",
// //   },
// // ];
// // export default function ProductReview() {
// //   const [modal, setModal] = useState(false);
// //   const toggle = () => setModal(!modal);

// //   const [rev, setRev] = useState({
// //     title: "",
// //     rating: "",
// //     des: "",
// //   });

// //   const [arr, setArr] = useState([]);
// //   const submitHandler = () => {
// //     setArr([...arr, rev]);
// //   };
// //   console.log("🚀 ~ ReviewInput ~ rev:", arr);

// //   return (
// //     <>
// //       <ReviewInput
// //         modal={modal}
// //         toggle={toggle}
// //         submitHandler={submitHandler}
// //         rev={rev}
// //         setRev={setRev}
// //       />
// //       <div className="w-100 p-5 d-flex justify-content-between">
// //         <Card
// //           style={{
// //             width: "18rem",
// //             height: "auto",
// //             border: "2px solid black",
// //           }}
// //         >
// //           {cardArr.map((e, i) => {
// //             return (
// //               <>
// //                 <img className="h-50" alt="Sample" src={e?.img} />

// //                 <Button
// //                   onClick={() => toggle()}
// //                   color="danger"
// //                   className="w-100"
// //                 >
// //                   {e?.button}
// //                 </Button>
// //               </>
// //             );
// //           })}

// //           {arr.map((e, i) => {
// //             return (
// //               <>
// //                 <CardBody>
// //                   <CardTitle tag="h5">Title :-{e?.title}</CardTitle>
// //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
// //                     Rating:- {e?.rating}
// //                   </CardSubtitle>
// //                   <CardText>Description :-{e?.des}</CardText>
// //                 </CardBody>
// //               </>
// //             );
// //           })}
// //         </Card>
// //       </div>
// //     </>
// //   );
// // }

// import React, { useState } from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardSubtitle,
//   CardText,
//   CardTitle,
// } from "reactstrap";

// import img1 from "../../0.Images/bike.jpeg";
// import img2 from "../../0.Images/fruitesImage.jpg";
// import img3 from "../../0.Images/Background.jpg";
// import img4 from "../../0.Images/camera.jpg";
// import ReviewInput from "./ReviewInput";

// const cardArr = [
//   {
//     img: img1,
//     button: "Give Review",
//     button1: "Reset",
//   },
//   {
//     img: img2,
//     button: "Give Review",
//     button1: "Reset",
//   },
//   {
//     img: img3,
//     button1: "Reset",
//     button: "Give Review",
//   },
//   {
//     img: img4,
//     button: "Give Review",
//     button1: "Reset"
//   },
// ];

// export default function ProductReview() {
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   const [rev, setRev] = useState({
//     title: "",
//     rating: "",
//     des: "",
//   });

//   const [arr, setArr] = useState([]);
//   const submitHandler = () => {
//     setArr([...arr, rev]);
//   };

//   const reserHandeler =(index)=>{
//    let reset= arr.filter((e,i)=> i !== index)
//     setArr(reset)

//   }
//   console.log("🚀 ~ ReviewInput ~ rev:", arr);

//   return (
//     <>
//       <ReviewInput
//         modal={modal}
//         toggle={toggle}
//         submitHandler={submitHandler}
//         rev={rev}
//         setRev={setRev}
//       />
//       <div className="w-100 p-5 d-flex justify-content-between">
//         {/* Static cards */}
//         {cardArr.map((e, i) => (
//           <Card
//             key={i}
//             style={{
//               width: "18rem",
//               height: "auto",
//               border: "2px solid black",
//               margin: "10px",
//             }}
//           >
//             <img className="h-50" alt="Sample" src={e?.img} />
//             <CardBody>
//               {arr.map((e, i) => (
//                 <>
//                   <CardTitle tag="h5">Title: {e?.title}</CardTitle>
//                   <CardSubtitle className="mb-2 text-muted">
//                     Rating: {e?.rating}
//                   </CardSubtitle>
//                   <CardText>Description: {e?.des}</CardText>
//                 </>
//               ))}
//               <Button onClick={toggle} color="danger" className="w-100">
//                 {e?.button}
//               </Button>
//               <Button onClick={()=>reserHandeler(i)} color="danger" className="w-100 mt-2">
//                 {e?.button1}
//               </Button>
//             </CardBody>
//           </Card>
//         ))}

//         {/* Dynamic cards based on reviews */}
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import img1 from "../../0.Images/bike.jpeg";
import img2 from "../../0.Images/fruitesImage.jpg";
import img3 from "../../0.Images/Background.jpg";
import img4 from "../../0.Images/camera.jpg";
import ReviewInput from "./ReviewInput";

const cardArr = [
  {
    img: img1,
    button: "Give Review",
    button1: "Reset",
  },
  {
    img: img2,
    button: "Give Review",
    button1: "Reset",
  },
  {
    img: img3,
    button1: "Reset",
    button: "Give Review",
  },
  {
    img: img4,
    button: "Give Review",
    button1: "Reset"
  },
];

export default function ProductReview() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [rev, setRev] = useState({
    title: "",
    rating: "",
    des: "",
  });

  const [arr, setArr] = useState([]);
  const submitHandler = () => {
    setArr([...arr, rev]);
  };

  const [activeIndex, setActiveIndex] = useState(-1); // State to track active card index

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Set the active card index
    toggle(); // Open the modal
  };

  const resetHandler = () => {
    setActiveIndex(-1); // Reset active card index
    setArr([]); // Reset reviews
  };

  console.log("🚀 ~ ReviewInput ~ rev:", arr);

  return (
    <>
      <ReviewInput
        modal={modal}
        toggle={toggle}
        submitHandler={submitHandler}
        rev={rev}
        setRev={setRev}
      />
      <div className="w-100 p-5 d-flex justify-content-between">
        {/* Static cards */}
        {cardArr.map((e, i) => (
          <Card
            key={i}
            style={{
              width: "18rem",
              height: "auto",
              border: "2px solid black",
              margin: "10px",
            }}
          >
            <img className="h-50" alt="Sample" src={e?.img} />
            <CardBody>
              {/* Render details if the card is active */}
              {activeIndex === i && (
                <>
                  {arr.map((review, index) => (
                    <div key={index}>
                      <CardTitle tag="h5">Title: {review?.title}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted">
                        Rating: {review?.rating}
                      </CardSubtitle>
                      <CardText>Description: {review?.des}</CardText>
                    </div>
                  ))}
                </>
              )}
              {/* Render buttons */}
              <Button onClick={() => handleButtonClick(i)} color="danger" className="w-100">
                {e?.button}
              </Button>
              <Button onClick={resetHandler} color="danger" className="w-100 mt-2">
                {e?.button1}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

