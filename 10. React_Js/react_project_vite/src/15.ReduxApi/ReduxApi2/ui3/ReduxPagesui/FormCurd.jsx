import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Table } from "reactstrap";
import {
  deleteHandeler,
  submitHandler,
  upadateButton,
  userFetch,
} from "../../Feature1/Input/InputFormCurd";
import { Edit2, Trash, Trash2Icon } from "lucide-react";

export default function FormCurd() {
  let [userInput, setUserInput] = useState("");
  let [search, setSearch] = useState("");
  let [index, setIndex] = useState(null);

  let userData = useSelector((store) => {
    return store.inputReducer.user;
  });
  const [filteredUserData, setFilteredUserData] = useState(userData);

  console.log("🚀 ~ userData ~ userData:", userData);
  let dispatch = useDispatch();

  useEffect(() => {
    const filteredData = userData.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUserData(filteredData);
    // Update filtered data state or use it directly in your rendering
  }, [search, userData]);

  const submitHandler2 = () => {
    dispatch(submitHandler(userInput));
    setUserInput("");
  };

  const deleteHandeler2 = (index) => {
    dispatch(deleteHandeler(index));
  };
  const updateHandeler2 = (data, i) => {
    setUserInput(data);
    setIndex(i);
  };
  const upadateButton2 = () => {
    // dispatch(upadateButton( userInput));
    dispatch(upadateButton({ index, userInput }));
    setIndex(null);
  };

  return (
    <div className="container pt-5 w-100 ">
      <h2>{search}</h2>
      <h3>{userInput}</h3>
      <Form className="d-flex  mb-4 mt-4">
        <Input
          type="text"
          placeholder="Enter Name"
          value={userInput}
          onChange={(e) => setUserInput(e?.target.value)}
          className="w-50 border border-2 border-dark"
        />
        <Button
          color="danger"
          className="ps-5 pe-5"
          onClick={() => submitHandler2(index, userInput)}
        >
          Add
        </Button>
        <Button
          color="danger"
          className="ps-5 pe-5 ms-3"
          onClick={() => upadateButton2()}
        >
          update
        </Button>
      </Form>

      <Form>
        <Input
          className="border border-2 border-dark w-25 mb-4"
          placeholder="Search Here"
          type="search"
          onChange={(e) => setSearch(e?.target?.value)}
        />
      </Form>

      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserData.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e}</td>
                <td>
                  <Trash2Icon
                    color="red"
                    role="button"
                    onClick={() => deleteHandeler2(i)}
                  />
                </td>
                <td>
                  <Edit2
                    color="red"
                    role="button"
                    onClick={() => updateHandeler2(e, i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
