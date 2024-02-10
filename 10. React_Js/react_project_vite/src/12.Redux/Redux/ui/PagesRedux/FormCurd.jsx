import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import { deleteHandeler, submitHandler, upadateButton } from "../../Feature/Input/InputFormCurd";
import { Edit2, Trash, Trash2Icon } from "lucide-react";

export default function FormCurd() {
  let [userInput, setUserInput] = useState("");
  let [index, setIndex] = useState(null);


  let userData = useSelector((store) => {
    return store.inputReducer.user;
  });
  console.log("🚀 ~ userData ~ userData:", userData);
  let dispatch = useDispatch();

  const submitHandler2 = () => {
    dispatch(submitHandler(userInput));
    setUserInput("");
  };

  const deleteHandeler2 =(index)=>{
    dispatch(deleteHandeler(index));
  }
  const updateHandeler2=(data,i)=>{
    setUserInput(data)
    setIndex(i)
  }
  const upadateButton2=()=>{
    // dispatch(upadateButton( userInput));
    dispatch(upadateButton({ index, userInput }));
    setIndex(null); 
   }

  return (
    <div className="container pt-5 w-100 ">
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
          onClick={() => submitHandler2(index,userInput)}
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
      
      {userData.map((e, i) => {
        return (
          <div className="border border-2 w-25 p-2">
            <div key={i} className="d-flex justify-content-between">
              <h4>{i + 1}.</h4>
              <h4>{e}</h4>
              <p><Trash2Icon color="red" role="button" onClick={()=>deleteHandeler2(i)}/></p>
              <p><Edit2 color="red" role="button" onClick={()=> updateHandeler2(e,i)}/></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
