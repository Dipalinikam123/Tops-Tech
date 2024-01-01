// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Label,
//   Col,
//   Input,
// } from "reactstrap";

// export default function GoToLogin({ modal,toggle  }) {
//   const initilization = {
//     email: "",
//     password: "",
//   };
//   const navigate =useNavigate()
//   let [user, setUser] = useState(initilization);
//   function submitBtn(e) {
//     e.preventDefault();

//     let newUsrget = JSON.parse(localStorage.getItem("newuser")) || "[]";

//     let loginMatchData = newUsrget.find((e) => e.email === user.email);

//     if (loginMatchData) {
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log("LoginData", user);

//       // on click input in his initial state
//       setUser(initilization);
//       navigate('/')
//       toggle()
//     } else {
//       alert("Match Not Found");
//     }
//   }

 
//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup row>
//               <Label for="exampleEmail" sm={2}>
//                 Email
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   value={user?.email}
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="Enter Your E-Mail here"
//                   type="email"
//                   onChange={(e) =>
//                     setUser({ ...user, email: e?.target?.value })
//                   }
//                 />
//               </Col>
//             </FormGroup>

//             <FormGroup row>
//               <Label for="exampleNumber" sm={2}>
//                 PassWord
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   value={user?.password}
//                   id="examplepassword"
//                   name="Password"
//                   placeholder="Enter Your password here"
//                   type="password"
//                   onChange={(e) =>
//                     setUser({ ...user, password: e?.target?.value })
//                   }
//                 />
//               </Col>
//             </FormGroup>

//           </Form>
//         </ModalBody>
       
//         <ModalFooter>
//           <Button color="danger" onClick={(e) => submitBtn(e)}>
//             Login
//           </Button>
//           <Button color="primary" onClick={toggle}>
//             cancle
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }
