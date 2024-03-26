import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Admin() {
  const [alldata, setAllData] = useState([]);
  let [filter, setFilter] = useState([]);
  const [selectedLoginType, setSelectedLoginType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  // const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    // setRefresh(true)
  }, []);

  useEffect(() => {
    let normalData = JSON.parse(localStorage.getItem("user") || "[]");
    setAllData(normalData);
    if (selectedLoginType && selectedLoginType !== "All") {
      let selectData = normalData.filter(
        (e) => e.loginType === selectedLoginType
      );
      setAllData(selectData);
      setFilter(selectData);
    }
    if (searchQuery) {
      const filteredData = filter.filter((user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setAllData(filteredData);
    }
     if(selectedLoginType === "All" && searchQuery){
       const allDt= alldata.filter((e,i)=>  e.email.toLowerCase().includes(searchQuery.toLowerCase()))
        setAllData(allDt)
     } 
  }, [selectedLoginType, searchQuery]);

  return (
    <>
      <Form className="mt-4 ms-3 d-flex w-100 justify-content-center">
        <FormGroup row>
          <Label for="exampleNumber">Login Type</Label>
          <Col sm={10}>
            <Input
              className="w-100 border-dark"
              value={selectedLoginType}
              id="examplelogintype"
              name="select"
              type="select"
              onChange={(e) => setSelectedLoginType(e?.target?.value)}
            >
              <option>All</option>
              <option>Admin</option>
              <option>User</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Label>Search Here</Label>
          <Input
            className="w-100 border-dark"
            placeholder="Search here"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
          />
        </FormGroup>
      </Form>
      <Table className="w-75 m-auto mt-5">
        <thead>
          <tr>
            <th>SR.</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>LoginType</th>
          </tr>
        </thead>
        <tbody>
          {alldata?.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>{e?.loginType}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

// const filteredData = selectedLoginType === "All" ? alldata : alldata.filter((user) => user.loginType === selectedLoginType);

// useEffect(()=>{
//   if (selectedLoginType !== "All" && user.loginType !== selectedLoginType) {
//         const filteredData = alldata?.filter((user) => {
//         setAllData(filteredData)
//       });
//       }
//       // if (
//       //   searchQuery &&
//       //   user.email.toLowerCase().indexOf(searchQuery.toLowerCase())
//       // ) {
//       //   return false;
//       // }
//       // return true;

// },)
