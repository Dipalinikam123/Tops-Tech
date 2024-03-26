import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";

export default function AdminAddUserF({ modal, toggle }) {
  const initilization = {
    name: "",
    email: "",
    password: "",
    age: "",
    loginType:"User"
  };

  let [newuser, setNewUser] = useState(initilization);

  
 
 
  function submitBtn(e) {
    console.log("newUser========",newuser)
    e.preventDefault();

     //get old data from localstorage
    // let oldData= localStorage.getItem("newuser")  direcrtly write in parse
    // console.log("old",oldData)// string
    let oldDataConvert=JSON.parse(localStorage.getItem("newuser")) || []  //convert to array of oject

    // before add new data and after get oldData we need to check user's are duble registered or not
   let matchData= oldDataConvert.find((e)=>e.email === newuser.email)

    if(matchData){
      alert('already register')
      // toggle()
      // setlogModal(true)
    }

    else{   
         //add
      //in local storage we have multiple user thats why we use array
      let newUserFnData= [...oldDataConvert,newuser] //add newuser object in array and before copy oldData
      console.log(newUserFnData)// return newuser in array like [{}]
      localStorage.setItem("newuser", JSON.stringify(newUserFnData)); 
      //  we add new data then it will replace by old data so need to get old data first from localStorage before add new data in localSrorage 
      
      //register details also store on click on register button
        // localStorage.setItem("user",JSON.stringify(newuser))
        // on click input in his initial state
        setNewUser(initilization);
        toggle();  
      }
  }
  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Registration Form</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleName" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  value={newuser?.name}
                  id="exampleName"
                  name="name"
                  placeholder="Enter Your Name here"
                  type="text"
                  onChange={(e) =>
                    setNewUser({ ...newuser, name: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  value={newuser?.email}
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter Your E-Mail here"
                  type="email"
                  onChange={(e) =>
                    setNewUser({ ...newuser, email: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  value={newuser?.password}
                  id="exampleNumber"
                  name="password"
                  placeholder="Enter Your password here"
                  type="password"
                  onChange={(e) =>
                    setNewUser({ ...newuser, password: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Login Type
              </Label>
              <Col sm={10}>
                <Input
                  value={newuser?.loginType}
                  id="examplelogintype"
                  name="select"
                  type="select"
                  onChange={(e) => //console.log(e.target.value) o/p- whatever u selected like (user)= user
                    setNewUser({ ...newuser, loginType: e?.target?.value })
                  }
                > <option>User</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Age
              </Label>
              <Col sm={10}>
                <Input
                  value={newuser?.age}
                  id="exampleNumber"
                  name="Number"
                  placeholder="Enter Your Age here"
                  type="text"
                  onChange={(e) =>
                    setNewUser({ ...newuser, age: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        {/* <p className="text-primary" role="button" onClick={()=>loginDr()}>Login....</p> */}
        <ModalFooter>
          <Button color="primary" onClick={(e) => submitBtn(e)}>
            Register
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
