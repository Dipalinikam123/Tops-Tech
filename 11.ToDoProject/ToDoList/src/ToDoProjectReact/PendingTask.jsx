// import { SquarePen } from "lucide-react";
import { ArrowUpFromLine, FileOutput } from "lucide-react";
import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";

export default function PendingTask({
  addData,
  setAddData,
  page,
  setPage,
  updateHandeler,
  SearchHandeler,
}) {
  let [addToPage, setAddToPage] = useState([]);

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
  const addBtn = () => {
    let notDone = [];
    let done = [];

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

  const selectAll = () => {
    // Check if all tasks are already selected
    const allSelected = addToPage.length === addData.length;
    console.log("addtpage", addToPage);
    console.log("addtopage.length", addToPage.length);
    console.log("adddata", addData.length);
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

  // const updateHandeler=(updateData,index)=>{
  //   setData(updateData)
  //   setUpdateIndex(index)
  // }

  // const updateButton =()=>{
  //   if (updateIndex !== null) {
  //     const updateCheck = [...data];
  //     updateCheck[updateIndex] = addData;
  //     setData(updateCheck)
  //     setUpdateIndex(null);

  //   }
  // }

  return (
    <>
      <div className="content w-100">
        <div className="notebook-page">
          <div
            style={{
              padding:"15px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              marginBottom: "10px",
            }}
          >
            <div>
              <Form>
                <Input style={{marginLeft:"60px", width:"150px", border:"2px solid blue"}} type="search" placeholder="Search here" className="p-1"  onChange={(e)=>SearchHandeler(e) }/>
              </Form>
            </div>
            <div>
              <h3 className="fw-bold mb-2">*PENDING TASK*</h3>
            </div>

            <div className="d-flex">
              {
                addData.length !==0 && <>
              <div className="mt-2 me-2">Select All</div>
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
            </>
            }
            </div>
          </div>


          <div id="msg" className="w-100">
            <div> 
              <hr style={{width:"100%", border: "3px solid blue", marginBottom:"20px" }}/>
            </div>
            {addData?.map((e, i) => {
              return (
                <>
                  <div>
                    <ul
                      className="d-flex gap-5 align-items-center"
                      key={i}
                      style={{
                        listStyle: "none",
                        textTransform: "capitalize",
                      }}
                    >
                      <li style={{ width: "100%" }}>
                        {i + 1}.{" "}{e}
                      </li>
                      <li>
                      <ArrowUpFromLine
                          color="red"
                          className="mb-2"
                          role="button"
                          onClick={() => updateHandeler(e, i)}
                        />
                      </li>
                      <li>
                        <Input
                          type="checkbox"
                          checked={addToPage?.includes(i)}
                          onChange={() => checkUncheck(i)}
                          style={{
                            boxShadow: "none",
                            border: "1px solid red",
                            margin: "0 10px",
                          }}
                        />
                      </li>
                    </ul>
                    <hr
                      style={{ border: "1px solid black", marginBottom:"12px" }}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
            {
              addToPage.length !== 0 && <>
          <Button
            className="bg-danger w-75 fs-6 fw-4 mt-2 border border-danger"
            onClick={() => addBtn()}
            >
            Selected Add
          </Button>
              </>
            }
            </div>
        </div>
      </div>  
      {/* </div> */}
    </>
  );
}
