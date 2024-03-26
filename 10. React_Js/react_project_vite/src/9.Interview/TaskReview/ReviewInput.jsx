import { Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ReviewInput({ modal, toggle,submitHandler, rev,setRev }) {

  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Title placeholder"
                type="email"
                onChange={(e) => setRev({ ...rev, title: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Rating</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="number"
                min="1"
                max="5"
                required
                onChange={(e) => setRev({ ...rev, rating: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDescription">Description</Label>
              <Input
                id="exampleDescription"
                name="description"
                placeholder="Description placeholder"
                type="text"
                onChange={(e) => setRev({ ...rev, des: e?.target?.value })}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => submitHandler()}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
