import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input } from "reactstrap";
import "../../src/index.css"
import PendingTask from "./PendingTask";
import DoneTask from "./DoneTask";

export default function MainFile() {
  const today = new Date();
  const dates = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const currentDate = dates + "/"+ month + "/" + year;

  let [data, setData] = useState("");
  let [addData, setAddData] = useState([]);
  let [page, setPage] = useState([]);
  let [updateIndex, setUpdateIndex] = useState(null);
  let [search, setSearch] = useState("");
  let [date, setDate] = useState(currentDate);

  useEffect(() => {
    const storedAddData = JSON.parse(localStorage.getItem("addData")) || [];
    const storedPage = JSON.parse(localStorage.getItem("restore")) || [];
    setAddData(storedAddData);
    setPage(storedPage);
  }, []);

  useEffect(() => {
    let jsonData = localStorage.getItem("addData");
    let normalData = JSON.parse(jsonData) || [];

    const filteredData = normalData.filter((task) => {
      return task.toLowerCase().includes(search.toLowerCase());
    });

    // Update the displayed tasks based on the filtered results
    setAddData(filteredData);
  }, [search]);

  const addToList = () => {
    if (data == "" || data === null) {
      alert("Enter Your Task ");
    } else {
      setAddData([...addData, data]);
      localStorage.setItem("addData", JSON.stringify([...addData, data]));
      setData("");
    }
  };

  const updateHandeler = (updateData, index) => {
    setData(updateData);
    setUpdateIndex(index);
  };

  const updateButton = () => {
    if (updateIndex !== null) {
      const updateCheck = [...addData];
      updateCheck[updateIndex] = data;
      console.log("🚀 ~ updateButton ~ data:", data);
      setAddData(updateCheck);
      localStorage.setItem("addData", JSON.stringify(updateCheck));
      setData("");
      setUpdateIndex(null);
    }
  };

  const SearchHandeler = (ele) => {
    setSearch(ele?.target?.value);
  };

  return (
    <>
<div className="m-3 w-100" style={{background: "linear-gradient(90deg, rgba(106,137,215,0.46551120448179273) 0%, rgba(247,124,176,1) 100%)"}}>

        <div className="w-100 d-flex flex-column  justify-content-center">
            <h2 style={{background:"line"}}  className="text-center text-dark fst-italic fw-bold">
              TO-DO LIST
            </h2>
          <div style={{margin:"auto"}}>
            <h3 className="text-primary">Date: {date}</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <Input
            type="text"
            placeholder="Add Task"
            value={data}
            onChange={(e) => setData(e?.target?.value)}
            className="w-25"
            style={{ textTransform: "capitalize", fontWeight: "700" }}
          />
          {updateIndex !== null ? (
            <Button
              className="ms-3"
              style={{
                width: "100px",
                backgroundColor: "DodgerBlue",
                fontSize: "18px",
              }}
              onClick={updateButton}
            >
              Update
            </Button>
          ) : (
            <Button
              className="ms-3"
              style={{
                width: "80px",
                backgroundColor: "DodgerBlue",
                fontSize: "18px",
              }}
              onClick={addToList}
            >
              Add
            </Button>
          )}
        </div>
        <div className="d-flex justify-content-center d-inline w-100">
          <PendingTask
            addData={addData}
            setAddData={setAddData}
            page={page}
            setPage={setPage}
            updateHandeler={updateHandeler}
            SearchHandeler={SearchHandeler}
          />
          <DoneTask
            page={page}
            setPage={setPage}
            addData={addData}
            setAddData={setAddData}
          />
        </div>
      </div>
    </>
  );
}
