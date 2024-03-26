import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

export default function Profile() {
  let [adminData, setAdminData] = useState([]);

 
  useEffect(() => {
    // let jsonData= localStorage.getItem("newuser")|| '[]'; //if localstorage is blank thats why "|| '[]'" if we not use this then it will be null and null will not convert in parse it's through error
    // let normalData = JSON.parse(jsonData)
    //optimize code
    let normalData=(JSON.parse(localStorage.getItem("newuser") || "[]"));
    setAdminData(normalData)

   
  }, []);
  
  return (
    <div className="m-5 fs-5">
      <Table>
        <thead>
          <tr>
            <th>SR.No</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Age</th>
            <th>LoginType</th>
          </tr>
        </thead>
        <tbody>
          {
          adminData?.map((e, i) => {
            //[{},{},{}] e=> e return 1 object in array
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
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
