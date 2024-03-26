import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { XCircle } from "lucide-react";
import "./productTable.css";

const options = [
  { value: "formal", label: "Formal" },
  { value: "casual", label: "Casual" },
  { value: "shose", label: "Shose" },
];

const formFields = [
  { key: "title", type: "text" },
  { key: "description", type: "text" },
  { key: "brand", type: "text" },
  // { key: "price", type: "number" },
];

// let field = {
//   title: "",
//   description: "",
//   brand: "",
//   gender: "",
//   price: "",
//   thumbnail: "",
//   discountPercentage: "0",
//   category: [],
//   color: [],
//   size: [],
// };

export default function FormModel({
  modal,
  toggle,
  editData,
  submitHandeler,
  updateHandeler,
  field,
}) {
  let [user, setUser] = useState(editData); //change
  // console.log("🚀 ~ user:", user);

  useEffect(() => {
    setUser(editData);
  }, [editData]);



  const checkUncheck = (ele, key) => {
    console.log("🚀 ~ checkUncheck ~ key:", key);
    console.log("🚀 ~ checkUncheck ~ ele:", ele);

    let match = user?.[key]?.includes(ele);
    console.log("🚀 ~ file: ProductForm.jsx:34 ~ checkUncheck ~ match:", match);
    if (match) {
      let data = user?.[key]?.filter((e) => e !== ele);
      setUser({ ...user, [key]: data });
    } else {
      setUser({ ...user, [key]: [...user?.[key], ele] });
    }
  };


  // const sizeCheck = (number) => {
  //     let match2 = user?.size?.includes(number)
  //     console.log("🚀 ~ file: ProductForm.jsx:34 ~ checkUncheck ~ match2:", match2)
  //     if (match2) {
  //         setUser({ size: user?.size?.filter((e, i) => e !== number) })
  //     }
  //     else {
  //         setUser({ ...user, size: [...user?.size, number] })
  //     }
  // }

  const selectHandel = (selected) => {
    console.log("🚀 ~ selectHandel ~ selectedQ:", selected);

    let selectKey = selected.map((e, i) => {
      return e.label;
    });
    console.log("🚀 ~ selectKey ~ selectKey:", selectKey);
    setUser({ ...user, category: selectKey });
  };

  const clearField = () => {
    toggle();
    setUser(field);
  };

  const update = () => {
    updateHandeler(user);
  };

  const submit = () => {
    submitHandeler(user);
  };

  return (
    <div className="w-100">
      <Modal isOpen={modal} toggle={toggle} className="w-75">
        <div className="d-flex justify-content-end mt-3 me-3">
          <XCircle color="red" role="button" onClick={() => clearField()} />
        </div>
        <ModalHeader>Product Form</ModalHeader>
        <Form className="pe-5 ps-3 pt-4">
          <FormGroup>
            {formFields.map(({ key, type }) => {
              return (
                <>
                  <Label
                    for="exampleEmail"
                    style={{ textTransform: "capitalize" }}
                  >
                    {key}:-
                  </Label>
                  <Input
                    className=" mb-2"
                    value={user[key]}
                    id="exampleEmail"
                    name="text"
                    placeholder={`Enter Your ${key}`}
                    type={type}
                    onChange={(e) =>
                      setUser({ ...user, [key]: e?.target?.value })
                    }
                  />
                </>
              );
            })}
          </FormGroup>

          <FormGroup tag="fieldset">
            <Label>Price:-</Label>
                    <Input
                      type="number"
                      name="xyz"
                      placeholder="Enter price"
                      onChange={(e)=> setUser({...user, price:e?.target?.value}) }
                      value={user?.price}
                      // className="p-2 border-dark"
                    />
        
          </FormGroup>

          <FormGroup tag="fieldset">
            <label>Gender:-</label>
            {["female", "male", "kids"].map((e, i) => {
              return (
                <>
                  <FormGroup check key={i}>
                    <Input
                      type="radio"
                      name="radio"
                      checked={user?.gender === e}
                      onChange={() => setUser({ ...user, gender: e })}
                      // value={e}
                      className="p-2 border-dark"
                    />
                    <lable >{e}</lable>
                  </FormGroup>
                </>
              );
            })}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Thumbnail:-</Label>
            <Input
              id="examplePassword"
              name="number"
              placeholder="image url"
              type="text"
              onChange={(e) =>
                setUser({ ...user, thumbnail: e?.target?.value })
              }
              value={user?.thumbnail}
            />
          </FormGroup>

          <FormGroup className="d-flex gap-2">
            <lable for="examplePassword">Discount:-</lable>
            <Input
              className="w-75"
              id="examplePassword"
              name="number"
              placeholder="password placeholder"
              type="range"
              min="0"
              max="100"
              onChange={(e) =>
                setUser({ ...user, discountPercentage: e?.target?.value })
              }
              value={user?.discountPercentage}
            />
            <span>{user?.discountPercentage}%</span>
          </FormGroup>

          <FormGroup>
                    <Label for="exampleSelect">Category</Label>
                    <Select options={options} isMulti
                        onChange={(selected) => selectHandel(selected)}
                        value={user.category.map((e) => ({ label: e.toUpperCase().charAt(0) + e.slice(1), value: e }))}
                    />
                </FormGroup>

          {/* <FormGroup>
            <Label for="exampleSelect">Category:-</Label>
            <Select
              options={options}
              isMulti
              onChange={(selected) => selectHandel(selected)}
            />
          </FormGroup> */}

          <FormGroup>
            <div>
              <Label>Color :-</Label>
            </div>

            <div className="d-flex">
              {["red", "black", "white", "green"]?.map((e, i) => {
                return (
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <Input
                        key={i}
                        checked={user?.color?.includes(e)}
                        onChange={() => checkUncheck(e, "color")}
                        className="p-2 ms-2 border-dark"
                        type="checkbox"
                        value={e}
                      />
                    </div>
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: e,
                        borderRadius: "50%",
                        border: "1px solid black",
                      }}
                    ></div>
                    <div>
                      <lable className="me-4">{e}</lable>
                    </div>
                  </div>
                );
              })}
            </div>
          </FormGroup>

          <FormGroup className="d-flex flex-column">
            <div>
              <Label>Size :-</Label>
            </div>
            <div>
              {["42", "43", "44", "45"]?.map((e, i) => {
                return (
                  <>
                    <Input
                      key={i}
                      checked={user?.size?.includes(e)}
                      onChange={() => checkUncheck(e, "size")}
                      className="p-2 ms-2 me-2 border-dark"
                      type="checkbox"
                      value={e}
                    />
                    <lable className="me-4">{e}</lable>
                  </>
                );
              })}
            </div>
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button
              className="m-3 w-25 bg-danger border border-danger"
              color="primary"
              onClick={submit}
            >
              submit
            </Button>

            <Button
              className="m-3 w-25 bg-danger border border-danger"
              color="primary"
              onClick={() => update()}
            >
              Update
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
