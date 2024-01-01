import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import RegistrationModel from "./RegistrationModel";
import { toast } from "react-toastify";

export default function LoginModel({ modal, toggle }) {
  const initilization = {
    email: "",
    password: "",
  };
  let [user, setUser] = useState(initilization);
  const [regModal, setRegModal] = useState(false);
  const regToggle = () => setRegModal(!regModal);

  function submitBtn(e) {
    e.preventDefault();

    let newUsrget = JSON.parse(localStorage.getItem("newuser")) || "[]";

    if (newUsrget?.length === 0){
      alert("Data not found..! Need to Registration") 
      setUser(initilization)
      toggle()
      regToggle();
    }
      //if localStorage all blank and user try to login without

    //  toast.error('You need to Register');

    let loginMatchData = newUsrget.find((e) => e.email === user.email);

    if (loginMatchData) {
      if (loginMatchData?.password !== user?.password)
        return alert("password is wrong");

      alert('welcome')
      localStorage.setItem("user", JSON.stringify(loginMatchData));
      console.log("LoginData", user);

      // on click input in his initial state

      setUser(initilization);
      toggle();
    } else {
      alert("Email Not Found..! Create Account");
      // toggle();
      // regToggle();
    }
  }
  const openReg = ()=>{
    toggle()
    regToggle()
  }
  return (
    <div>
      <RegistrationModel modal={regModal} toggle={regToggle} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login Page</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  value={user?.email}
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter Your E-Mail here"
                  type="email"
                  onChange={(e) =>
                    setUser({ ...user, email: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                PassWord
              </Label>
              <Col sm={10}>
                <Input
                  value={user?.password}
                  id="examplepassword"
                  name="Password"
                  placeholder="Enter Your password here"
                  type="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={(e) => submitBtn(e)}>
            Login
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        <p
          className="text-primary ms-4 text-decoration-underline"
          role="button"
          onClick={() => openReg()}
        >
          Create Account ....!
        </p>
      </Modal>
    </div>
  );
}
