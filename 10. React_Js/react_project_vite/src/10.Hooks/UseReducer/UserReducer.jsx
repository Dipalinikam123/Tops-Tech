import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UserReducer() {
  let [user, dispatch] = useReducer(reducer, { email: "", password: "" });
  let [arr, setArr] = useState([]);

  function reducer(state, action) {
    console.log("state", state);
    console.log("action", action);
    if (action.actionType === "email") {
      return { email: action.email };
    } 
    else if (action.actionType === "password") {
      return { password: action.password };
    } 
    else {
      return state;
    }
  }
  const getData = (e) => {
    dispatch({ actionType: "email", email: e?.target?.value });
  };

  const getDataPass = (e) => {
    dispatch({ actionType: "password", password: e?.target?.value });
  };
   
  const submitHandler=()=>{
    setArr([...arr,user])
  }
  
  return (
    <>
      <h1>Email is {user?.email}</h1>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => getData(e)}
      />
      <Button onClick={()=>submitHandler()}>add Email</Button>
      <br />
      <br />

      <h1>password is {user?.password}</h1>
      <input
        type="text"
        placeholder="Enter password"
        onChange={(e) => getDataPass(e)}
      />
      <Button onClick={()=>submitHandler()}>add Password</Button> 

      {
        arr.map((e,i)=>{
            return (
              <>
              <h1>Email is:-{e.email}</h1>
              <h1>PassWord is:-{e.password}</h1>
              </>
            )
        })
      }
    </>
  );
}
