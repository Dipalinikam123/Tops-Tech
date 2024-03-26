import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function TaskUseReducer() {
  const [valueA, setvalueA] = useState();
  const [valueB, setvalueB] = useState();

  function reducer(state, action) {
    console.log("state", state);
    console.log("action", action);
    if (action === "sum") {
      return { ans: parseInt(valueA) + parseInt(valueB) };
    } else if (action === "sub") {
      return { ans: parseInt(valueA) - parseInt(valueB) };
    } else if (action === "multi") {
      return { ans: parseInt(valueA) * parseInt(valueB) };
    } else if (action === "div") {
      return { ans: parseInt(valueA) / parseInt(valueB) };
    }
  }

  let [task, setTask] = useReducer(reducer, { ans: "not selected" });

  return (
    <>
      <h1>input 1 :- {valueA}</h1>
      <input
        type="number"
        placeholder="Enter Your Number"
        name="a"
        onChange={(e) => setvalueA(e?.target?.value)}
      />
      <br />
      <br />
      <h1>input 2:- {valueB}</h1>
      <input
        type="number"
        placeholder="Enter Your Number"
        name="b"
        onChange={(e) => setvalueB(e?.target?.value)}
      />
      <br />

      <Button color="danger me-3 mt-3" onClick={() => setTask("sum")}>
        Add
      </Button>
      <Button color="danger me-3 mt-3" onClick={() => setTask("sub")}>
        sub
      </Button>
      <Button color="danger me-3 mt-3" onClick={() => setTask("multi")}>
        Multi
      </Button>
      <Button color="danger me-3 mt-3" onClick={() => setTask("div")}>
        Div
      </Button>

      <h1>Ans is {task?.ans} </h1>
    </>
  );
}
