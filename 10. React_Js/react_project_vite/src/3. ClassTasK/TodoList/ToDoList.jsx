import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { ArrowUpToLine, CheckCircle } from "lucide-react";
import { Input, Table } from "reactstrap";
import "./indexToDo.css";

export default function ToDoList() {
  let lineRef = useRef();
  let cDate = new Date().toDateString();
  let [date, setDate] = useState("");
  let [text, setText] = useState("");
  let [index, setIndex] = useState(null);
  let [userArr, setUserArr] = useState([]);
  let [buttn, setButn] = useState(false);
  let [check, setCheck] = useState([]);
  let [checkArr, setCheckArr] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("fullData");
    const normalDt = JSON.parse(data) || [];
    setUserArr(normalDt);
  }, []);

  function updateTime() {
    let time = new Date().toLocaleTimeString();
    setDate(time);
  }
  setInterval(updateTime, 1000);

  function addData(ele) {
    console.log("🚀 ~ file: ToDoList.jsx:10 ~ addData ~ ele:", ele);
    setText(ele?.target?.value);
  }

  function getDataBtn() {
    if (text == "") {
      alert("Please Enter List Name");
    } else {
      setUserArr([...userArr, text]);
      localStorage.setItem("fullData", JSON.stringify([...userArr, text]));
      setText("");
    }
  }

  const textInput = (data, index) => {
    setIndex(index);
    setText(data);
    setButn(true);
  };

  const updateTextInput = () => {
    if (index || index === 0) {
      userArr.splice(index, 1, text);
      setUserArr([...userArr]);
      localStorage.setItem("fullData", JSON.stringify(userArr));
      setText("");
      setIndex(null);
      setButn(false);
    }
  };

  function remove(index) {
    let removeData = userArr.filter((e, i) => i !== index);
    confirm("Are you sure") && setUserArr(removeData);
    localStorage.setItem("fullData", JSON.stringify(removeData));
  }

  function handleCheckboxChange(item) {
    if (check.includes(item)) {
      let updatedCheck = check.filter((e) => e !== item); //check.map(()) setCheck([...check]) try
      setCheck(updatedCheck);
    } else {
      setCheck([...check, item]);
    }
  }

  function checkeed() {
    console.log("====check", check);
    setCheckArr([...checkArr, check]);
  }

  return (
    <>
      <div className="main-div">
        <div className="date-time">
          <h1>Time:- {date}</h1>
          <h1>Date:- {cDate}</h1>
        </div>
        <div className="box-div">
          <h1>To Do List</h1>
          <input
            type="text"
            placeholder="Add Items"
            value={text}
            onChange={(e) => addData(e)}
            className="in-put"
          />

          {buttn ? (
            <button className="btn" onClick={() => updateTextInput()}>
              {" "}
              ${" "}
            </button>
          ) : (
            <button className="btn" onClick={() => getDataBtn()}>
              {" "}
              +{" "}
            </button>
          )}

          <div className="box-2">
            <button className="btn5" onClick={checkeed}>
              Checked
            </button>
          </div>
          <Table>
            <tbody>
              {userArr?.map((e, i) => {
                return (
                  <tr key={i}>
                    <td className="line">
                      <CheckCircle
                        role="button"
                        className="icon"
                        onClick={() => remove(i)}
                      />
                    </td>

                    <td>{e}</td>

                    <td>
                      <ArrowUpToLine
                        className="line2"
                        role="button"
                        onClick={() => textInput(e, i)}
                      />
                    </td>
                    <td>
                      <Input
                        check
                        type="checkbox"
                        id="checkbox1"
                        onChange={() => handleCheckboxChange(e)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <div className="tableDiv w-25">
          <Table>
            <thead>
              <tr>
                <th>checked List</th>
              </tr>
            </thead>
            <tbody>
              {checkArr?.length === 0 ? (
                <tr>
                  <td colSpan="9" style={{ textAlign: "center" }}>
                    Data not Found
                  </td>
                </tr>
              ) : (
                checkArr?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td style={{ textAlign: "center" }}>{e.join("-")} </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
