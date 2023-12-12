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

export default function RegistrationModel({ toggle, modal }) {
  let [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
  });

  let [regArr, setRegArr] = useState([]);

  function submitBtn() {
    if (user.email == "" && user.name == "") {
      alert("Fill this field first");
    } else {
      toggle();
      setRegArr([...regArr, user]);
      console.log("========",user)
    }

    // on click input in his initial state
    setUser({
      name: "",
      email: "",
      number: "",
      age: "",
    });
  }
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleName" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  value={user?.name}
                  id="exampleName"
                  name="name"
                  placeholder="Enter Your Name here"
                  type="text"
                  onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                />
              </Col>
            </FormGroup>

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
                Mobile No.
              </Label>
              <Col sm={10}>
                <Input
                  value={user?.number}
                  id="exampleNumber"
                  name="Number"
                  placeholder="Enter Your Number here"
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, number: e?.target?.value })
                  }
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Age
              </Label>
              <Col sm={10}>
                <Input
                  value={user?.age}
                  id="exampleNumber"
                  name="Number"
                  placeholder="Enter Your Age here"
                  type="text"
                  onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>submitBtn()}>
            Login
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
