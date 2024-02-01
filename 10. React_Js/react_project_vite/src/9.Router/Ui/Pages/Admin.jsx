import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import AdminAddUserF from "./AdminAddUserF";

export default function Admin() {
  let [adminData, setAdminData] = useState([]);
  let [showPassIndex, setShowPassIndex] = useState([]);
  const [regModal, setRegModal] = useState(false);
  const regToggle = () => setRegModal(!regModal);

 
  useEffect(() => {
    // let jsonData= localStorage.getItem("newuser")|| '[]'; //if localstorage is blank thats why "|| '[]'" if we not use this then it will be null and null will not convert in parse it's through error
    // let normalData = JSON.parse(jsonData)
    //optimize code
    let normalData=(JSON.parse(localStorage.getItem("newuser") || "[]"));
    setAdminData(normalData)
  }, [regModal]);

  function showPasswordHandler(i) {
    console.log("🚀 ~ file: MultipleShow.jsx:75 ~ showPasswordHandler ~ i:", i);
    setShowPassIndex([...showPassIndex, i]);
  }
  function showPasswordHandler2(index) {
    console.log("index=========", index);
    let hideItem = showPassIndex?.filter((i) => index !== i);
    setShowPassIndex(hideItem);
  }
  
  return (
    <div className="m-5 fs-5">
      <AdminAddUserF modal={regModal} toggle={regToggle} />
      <Button className="m-2 bg-dark" role="button" onClick={()=>regToggle()}>Add New User</Button>
      <Table>
        <thead>
          <tr>
            <th>SR.No</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Password</th>
            <th>ShowPassword</th>
            <th>Age</th>
            <th>LoginType</th>
          </tr>
        </thead>
        <tbody>
          {
          adminData?.map((e, i) => {
            //[{},{},{}] e=> e return 1 object in array

            if (e.loginType === "Admin") {
              return null;
            }
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                {/* <td>{e.password}</td> */}

                <td>{showPassIndex.includes(i) ? e.password : "**"}</td>
                <td>
                  {showPassIndex.includes(i) ? (
                    <Eye
                      color="#732121"
                      role="button"
                      onClick={() => showPasswordHandler2(i)}
                    />
                  ) : (
                    <EyeOff
                      color="#732121"
                      role="button"
                      onClick={() => showPasswordHandler(i)}
                    />
                  )}
                </td>

                <td>{e.age}</td>
                <td>{e.loginType}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
