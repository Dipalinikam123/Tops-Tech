// import React, { useState } from "react";
// import { Form, FormGroup, Input, Label } from "reactstrap";

// export default function CheckBoxValue() {
//   let [data, setData] = useState([]);

//   const checkHandler = (name) => {
//     let index = data?.indexOf(name);
//     if (index !== -1) {
//       data.splice(index, 1);
//       setData([...data]);
//     } else {
//       setData([...data, name]);
//     }
//   };
//   return (
//     <div>
//       <Form className="border border-danger rounded-2 w-50 m-auto p-3 mt-5 d-flex flex-column">
//         <FormGroup check inline>
//           <Input
//             onClick={() => checkHandler("urvish")}
//             checked={data?.includes("urvish")}
//             type="checkbox"
//           />
//           <Label check>URVISH</Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Input
//             onClick={() => checkHandler("manish")}
//             checked={data?.includes("manish")}
//             type="checkbox"
//           />
//           <Label check>MANISH</Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Input
//             onClick={() => checkHandler("pawan")}
//             checked={data?.includes("pawan")}
//             type="checkbox"
//           />
//           <Label check>PAWAN</Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Input
//             onClick={() => checkHandler("tejash")}
//             checked={data?.includes("tejash")}
//             type="checkbox"
//           />
//           <Label check>TEJASH</Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Input
//             onClick={() => checkHandler("yagnik")}
//             checked={data?.includes("yagnik")}
//             type="checkbox"
//           />
//           <Label check>YAGNIK</Label>
//         </FormGroup>
//       </Form>
//       {data.map((e) => (
//         <h1>{e}</h1>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";

const CheckBoxValue = () => {
  const initialNames = ["urvish", "manish", "pawan", "tejash", "yagnik"];
  const [data, setData] = useState([]);

  const checkHandler = (name) => {
    const index = data.indexOf(name);
    if (index !== -1) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    } else {
      setData([...data, name]);
    }
  };

  return (
    <div>
      <form className="border border-danger rounded-2 w-50 m-auto p-3 mt-5 d-flex flex-column">
        {initialNames.map((name) => (
          <div key={name}>
            <input
              type="checkbox"
              id={name}
              onChange={() => checkHandler(name)}
              checked={data.includes(name)}
            />
            <label htmlFor={name}>{name.toUpperCase()}</label>
          </div>
        ))}
      </form>
      {data.map((e, index) => (
        <h1 key={index}>{e}</h1>
      ))}
    </div>
  );
};

export default CheckBoxValue;
