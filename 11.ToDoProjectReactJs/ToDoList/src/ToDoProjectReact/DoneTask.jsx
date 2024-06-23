import { FileOutput, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function DoneTask({ page, setPage, addData, setAddData }) {
  let [addToPage2, setAddToPage2] = useState([]);

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

  const restorebtn = () => {
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
    console.log("--------------------");
    let notDone = [];
    let done = [];
    console.log(" addToPage---->:", addToPage2);
    console.log(" addData---->:", addData);
    page?.filter((e, i) => {
      if (i !== index) {
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

  const selectAll2 = () => {
    // Check if all tasks are already selected
    const allSelected = addToPage2.length === page.length;
    console.log("addtpage", addToPage2);
    console.log("adp", addToPage2.length);
    console.log("ap", page.length);
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

  const deleteselected = () => {
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
      <div className="content row">
        <div className="notebook-page  ">
          <div  style={{
            padding:"15px",
             width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "13px",
            }} 
          >
            <div>
              <Button color="danger" style={{marginLeft:"70px"}} onClick={() => allRemove()}>
                Delete All
              </Button>
            </div>
            <div>
              <h3 className="fw-bold mb-2">*DONE TASK*</h3>
            </div>

            <div className="d-flex">
              {
                page.length !==0 && <>
              <div className="mt-2 me-2">Select All</div>
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
                </>
              }
            </div>
            
          </div>

          <div id="msg">
          <div> 
              
              <hr style={{width:"100%", border: "3px solid blue", marginBottom:"20px" }}/>
            </div>
            {page?.map((e, i) => {
              return (
                <>
                  <div>
                    <ul
                      className="d-flex gap-5 align-items-center "
                      key={i}
                      style={{
                        listStyle: "none",
                        textTransform: "capitalize",
                      }}
                    > 
                      <li style={{ width: "100%" }}>
                        {i + 1}.{"  "}{e}
                      </li>
                      <li>
                        <Input
                          type="checkbox"
                          checked={addToPage2?.includes(i)}
                          onChange={() => checkUncheck2(i)}
                          style={{
                            boxShadow: "none",
                            border: "1px solid red",
                            margin: "0 8px",

                          }}
                        />
                      </li>
                      <li>
                        <Trash2
                          color="red"
                          role="button"
                          className="mb-2"
                          onClick={() => removeItem(i)}
                        />
                      </li>
                      <li>
                        <FileOutput
                          color="red"
                          role="button"
                          className="mb-2"
                          onClick={() => restorebtn2(i)}
                        />
                      </li>
                    </ul>
                    <hr style={{ border: "1px solid black", marginBottom:"12px"  }} />
                  </div>
                </>
              );
            })}
          </div>
          {
            addToPage2.length !==0 && <>
            <div className="d-flex  align-items-start justify-content-center gap-4 h-auto" >

          <Button
            className="bg-danger w-50 fs-6 fw-4 border border-danger"
            onClick={deleteselected}
            >
            Selected Delete
          </Button>
          <Button
            className="bg-danger w-25 fs-6 fw-1 border border-danger"
            onClick={restorebtn}
            >
            Restore
          </Button>
            </div>
            </>
            }
         
        </div>
      </div>
    </>
  );
}
