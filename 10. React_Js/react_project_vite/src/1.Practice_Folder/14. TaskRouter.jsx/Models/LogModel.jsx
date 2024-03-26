import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  Form,
  Col,
} from "reactstrap";

export default function LogModel({ toggle, modal }) {
    const [user, setUser] = useState({
        email:"",
        password:"",
        loginType:"User"
    })
    let loginHandeler =()=>{
        // e.preventDefault()
         let oldDataConvert = JSON.parse(localStorage.getItem("user")) || [];
         let array=[...oldDataConvert,user]
        localStorage.setItem("user", JSON.stringify(array)) || [];
        console.log("user", JSON.stringify(user))
        setUser({ email:"",
        password:"", loginType:"User"})

        toggle()

    }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>

        <Form className="p-4">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              value={user?.email}
              onChange={(e)=>setUser({...user, email:e?.target?.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              value={user?.password}
            onChange={(e)=>setUser({...user, password:e?.target?.value})}
            />
          </FormGroup>
          <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Login Type
              </Label>
              <Col sm={10}>
                <Input
                  value={user?.loginType}
                  id="examplelogintype"
                  name="select"
                  type="select"
                  onChange={(e) => setUser({ ...user, loginType: e?.target?.value })}
                >
                  <option>Admin</option>
                  <option>User</option>
                </Input>
              </Col>
            </FormGroup>

        </Form>
        <ModalFooter>
          <Button color="primary" onClick={()=>loginHandeler()}>Login</Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
