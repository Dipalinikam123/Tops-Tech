import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input } from "reactstrap";
// import "./index.css";
import { FileOutput, Trash2 } from "lucide-react";

export default function InOnePage() {
  let [data, setData] = useState("");
  let [addData, setAddData] = useState([]);
  let [addToPage, setAddToPage] = useState([]);
  let [addToPage2, setAddToPage2] = useState([]);
  let [page, setPage] = useState([]);
  // let [index, setIndex]= useState([])

  useEffect(() => {
    const storedAddData = JSON.parse(localStorage.getItem("addData")) || [];
    const storedPage = JSON.parse(localStorage.getItem("restore")) || [];
    setAddData(storedAddData);
    setPage(storedPage);
  }, []);

  const setList = (e) => {
    setData(e?.target?.value);
  };

  const addToList = () => {
    if (data == "" || data === null) {
      alert("Enter Your Task ");
    } else {
      setAddData([...addData, data]);
      localStorage.setItem("addData", JSON.stringify([...addData, data]));
      setData("");
    }
  };

  const checkUncheck = (index) => {
    let match = addToPage.includes(index);
    console.log(match);
    if (match) {
      setAddToPage(addToPage.filter((e) => e !== index));
    } else {
      console.log("---->", index);
      setAddToPage([...addToPage, index]);
    }
  };
  const checkUncheck2 = (index) => {
    let match = addToPage2.includes(index);
    console.log(match);
    if (match) {
      setAddToPage2(addToPage2.filter((e) => e !== index));
    } else {
      console.log("---->", index);
      setAddToPage2([...addToPage2, index]);
    }
  };

  const addBtn = () => {
    // alert('alert')
    // setPage([...page, addToPage]);
    let notDone = [];
    let done = [];
    // page = [0,3,4] // task index which are done
    // addData = [a,b,c,d,a] // all task
    // notdone = [b,c]
    // done = [a,d,a]
    console.log(" addToPage---->:", addToPage);
    console.log(" addData---->:", addData);
    addData?.map((e, i) => {
      if (addToPage?.includes(i)) {
        done.push(e);
      } else {
        notDone.push(e);
      }
    });

    setAddData(notDone);
    setPage([...page, ...done]);
    localStorage.setItem("restore", JSON.stringify([...page, ...done]));
    localStorage.setItem("addData", JSON.stringify(notDone));
    setAddToPage([]);
  };

  const restorebtn = () => {
    // setAddData([...addData, ...addToPage]);
    // localStorage.setItem("addData", JSON.stringify([...addData, ...addToPage]));

    let notDone = [];
    let done = [];
    console.log(" addToPage---->:", addToPage2);
    console.log(" addData---->:", addData);
    page?.map((e, i) => {
      if (addToPage2?.includes(i)) {
        done.push(e);
      } else {
        notDone.push(e);
      }
    });
    setPage(notDone);
    setAddData([...done, ...addData]);
    localStorage.setItem("restore", JSON.stringify(notDone));
    localStorage.setItem("addData", JSON.stringify([...done, ...addData]));
    setAddToPage2([]);
  };

   const restorebtn2 = (index) => {
    // setAddData([...addData, ...addToPage]);
    // localStorage.setItem("addData", JSON.stringify([...addData, ...addToPage]));
console.log("--------------------")
    let notDone = [];
    let done = [];
    console.log(" addToPage---->:", addToPage2);
    console.log(" addData---->:", addData);
    page?.filter((e, i) => {
      if (i!==index) {
        notDone.push(e);
      } else {
        done.push(e);
      }
    });
    setPage(notDone);
    setAddData([...done, ...addData]);
    localStorage.setItem("restore", JSON.stringify(notDone));
    localStorage.setItem("addData", JSON.stringify([...done, ...addData]));
    setAddToPage2([]);
  };

  const removeItem = (index) => {
    // let match = addToPage2.includes(index);

    let removeList = page.filter((e, i) => i !== index);
    alert("You Really Want To Delete Item");
    setPage(removeList);
    localStorage.setItem("restore", JSON.stringify(removeList));
    setAddToPage2([]);
    // }
    // else{
    //   alert('please select')
    // }
  };

  const selectAll = () => {
    // Check if all tasks are already selected
    const allSelected = addToPage.length === addData.length;
    console.log("addtpage", addToPage);
    console.log("adp", addToPage.length);
    console.log("ap", addData.length);
    console.log(
      "🚀 ~ file: ToDoTask.jsx:121 ~ selectAll ~ allSelected:",
      allSelected
    );

    // If all are selected, unselect all; otherwise, select all
    if (allSelected) {
      setAddToPage([]);
    } else {
      // Select all tasks
      const allIndexes = addData.map((e, index) => index);
      console.log(
        "🚀 ~ file: ToDoTask.jsx:131 ~ selectAll ~ allIndexes:",
        allIndexes
      );
      setAddToPage(allIndexes);
    }
  };

  const selectAll2 = () => {
    // Check if all tasks are already selected
    const allSelected = addToPage2.length === page.length;
    console.log("addtpage", addToPage);
    console.log("adp", addToPage.length);
    console.log("ap", addData.length);
    console.log(
      "🚀 ~ file: ToDoTask.jsx:121 ~ selectAll ~ allSelected:",
      allSelected
    );

    // If all are selected, unselect all; otherwise, select all
    if (allSelected) {
      setAddToPage2([]);
    } else {
      // Select all tasks
      const allIndexes = page.map((e, index) => index);
      console.log(
        "🚀 ~ file: ToDoTask.jsx:131 ~ selectAll ~ allIndexes:",
        allIndexes
      );
      setAddToPage2(allIndexes);
    }
  };

  const deleteAll = () => {
    let notDone = [];
    // let done = [];
    page?.map((e, i) => {
      if (!addToPage2?.includes(i)) {
        notDone.push(e);
        setAddToPage2([]);
      }
    });
    setPage(notDone);
    localStorage.setItem("restore", JSON.stringify(notDone));
  };

  const allRemove = () => {
    let confirmm = confirm("Remove all");
    if (confirmm) {
      alert("sure");
      setPage([]);
      localStorage.setItem("restore", JSON.stringify([]));
    } else {
      setPage([...page]);
    }
  };
  return (
    <>
      <div className="m-3 w-100">
        <h2 className="text-center text-light fst-italic fw-bold">
          TO-DO LIST
        </h2>
        <div className="d-flex justify-content-center ">
          <Input
            type="text"
            placeholder="Add Task"
            value={data}
            onChange={(e) => setList(e)}
            className="w-25"
            style={{ textTransform: "capitalize", fontWeight: "700" }}
          />
          <Button
            className="ms-3"
            style={{
              width: "80px",
              backgroundColor: "DodgerBlue",
              fontSize: "20px",
            }}
            onClick={addToList}
          >
            Add
          </Button>
        </div>

        <div className="d-flex justify-content-center d-inline w-100">
          <div className="content w-100">
            <div className="notebook-page">
              <h3 className="fw-bold mb-">*PENDING TASK*</h3>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  alignItems: "normal",
                  marginBottom: "10px",
                }}
              >
                <p className="mt-2">Select All</p>
                <Input
                  type="checkbox"
                  checked={addToPage.length === addData.length}
                  onClick={() => selectAll()}
                  style={{
                    padding: "11px",
                    border: "2px solid red",
                    boxShadow: "none",
                  }}
                />
              </div>
              <div id="msg" className="w-100">
                {addData?.map((e, i) => {
                  return (
                    <>
                      <div>
                        <ul
                          className="d-flex"
                          key={i}
                          style={{
                            listStyle: "none",
                            textTransform: "capitalize",
                          }}
                        >
                          <li style={{ width: "100%" }}>
                            {i + 1}.{e}
                          </li>
                          <li>
                            <Input
                              checked={addToPage?.includes(i)}
                              onChange={() => checkUncheck(i)}
                              type="checkbox"
                              style={{
                                boxShadow: "none",
                                border: "1px solid red",
                                margin: "0 10px",
                              }}
                            />
                          </li>
                        </ul>
                        <hr
                          style={{ width: "100%", border: "1px solid #0d6efd" }}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
              {/* <Button
                className="bg-danger w-75 fs-5 fw-4 mb-3 border border-danger"
                onClick={() => addBtn()}
              >
                All Selected Add
              </Button> */}
              <Button
                className="bg-danger w-75 fs-5 fw-4 border border-danger"
                onClick={() => addBtn()}
              >
                Selected Add
              </Button>
            </div>
          </div>

          <div className="content">
            <div className="notebook-page">
              <h3 className="fw-bold mb-4">*DONE TASK*</h3>
              <div>
                <Button color="danger" onClick={() => allRemove()}>
                  Delete All
                </Button>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  alignItems: "normal",
                  marginBottom: "10px",
                }}
              >
                <p className="mt-2">Select All</p>
                <Input
                  type="checkbox"
                  checked={addToPage2.length === page.length}
                  onClick={() => selectAll2()}
                  style={{
                    padding: "11px",
                    border: "2px solid red",
                    boxShadow: "none",
                  }}
                />
              </div>
              <div id="msg">
                {page?.map((e, i) => {
                  return (
                    <>
                      <div>
                        <ul
                          className="d-flex gap-5"
                          key={i}
                          style={{
                            listStyle: "none",
                            textTransform: "capitalize",
                          }}
                        >
                          <li style={{ width: "100%" }}>
                            {i + 1}.{e}
                          </li>
                          <li>
                            <Input
                              type="checkbox"
                              checked={addToPage2?.includes(i)}
                              onChange={() => checkUncheck2(i)}
                              style={{
                                boxShadow: "none",
                                border: "1px solid red",
                              }}
                            />
                          </li>
                          <li>
                            <Trash2
                              color="red"
                              role="button"
                              onClick={() => removeItem(i)}
                            />
                          </li>
                          <li>
                            <FileOutput
                              color="red"
                              role="button"
                              onClick={()=>restorebtn2(i)}
                            />
                          </li>
                        </ul>
                        <hr style={{ border: "1px solid #0d6efd" }} />
                      </div>
                    </>
                  );
                })}
              </div>
              <Button
                className="bg-danger w-75 fs-5 fw-4 border border-danger mb-3"
                onClick={deleteAll}
              >
                Selected Delete
              </Button>
              <Button
                className="bg-danger w-75 fs-5 fw-4 border border-danger"
                onClick={restorebtn}
              >
                Restore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
