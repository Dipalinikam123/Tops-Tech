import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import Register from '../Modelss/Register';
// import Register from '../Components/Modal/Register'

export default function Admin() {
  const [data, setData] = useState([])
  // const [passIndex, setPassIndex] = useState([])
  const [regmodal, setRegmodal] = useState(false);
  // const [fillterData, setFilterData] = useState([])
  const [userType1, setUserType1] = useState("All")
  const [search, setSearch] = useState("")
  console.log("🚀 ~ Admin ~ userType:", userType1)

  const Regtoggle = () => setRegmodal(!regmodal);

  useEffect(() => {
    let RegData = JSON.parse(localStorage.getItem("RegisterData")) || []
    setData(RegData)
  }, [regmodal])



let filterData = data?.filter((e,i)=>{
  if(userType1 !== "All" || e.userType !== userType1){
    return false
  }
  if ( search && e.email.toLowerCase().indexOf(search.toLowerCase())) 
  {
    return false
  }
  return true
  // Check if the search term is found in the user's data
  // const searchDataMatches = e.email.toLowerCase().includes(search.toLowerCase());
  // Return true if both conditions are met
  // return userTypeMatches && searchDataMatches;
})
console.log("🚀 ~ filterData ~ filterData:", filterData)


  // useEffect(() => {
  //   const filter = () => {
  //     if (userType === "All") {
  //       setFilterData(data);
  //     } else {
  //       const filtered = data.filter(user => user.usertype === userType);
  //       console.log("🚀 ~ //filter ~ filtered:", filtered)
  //       setFilterData(filtered);
  //       console.log("==========",fillterData)
  //     }
  //   };

  //   filter()
  // }, [userType, data])
  
  // useEffect(()=>{

  //   let searchData = data.filter((e) => e?.email.toLowerCase().includes(search.toLowerCase()));
  //   setFilterData(searchData);


    // const search = () => {
      // let searchData = fillterData.filter((e)=>{
      //   e?.email.includes(search)
      // })
      // console.log("🚀 ~ searchData ~ searchData:", searchData)
      // setFilterData(searchData)
    // }
    // search()

  // },[search,data])

  return (
    <>
      <Register modal={regmodal} toggle={Regtoggle} />

      <Button onClick={Regtoggle}>Add User</Button>
      <Form>
        <FormGroup>
          <Label for="usertype">
            Select type
          </Label>
          <Input
            id="usertype"
            name="select"
            value={userType1}
            type="select"
            onChange={(e) => setUserType1(e.target.value)}
          >
            <option value={"All"}>
              All
            </option>
            <option value={"User"}>
              User
            </option>
            <option value={"Admin"}>
              Admin
            </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <input type="search"
          value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormGroup>
      </Form >
      <Table striped>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email Id</th>
            <th>Password</th>
            {/* <th>Icon</th> */}
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {
            filterData.map((e, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  {/* <td>{passIndex?.includes(i) ? e.password : '********'}</td>
                <td>
                  {passIndex.includes(i) ? (
                    <Eye
                      role="button"
                      onClick={() => hidePassword(i)}
                    />
                  ) : (
                    <EyeOff
                      role="button"
                      onClick={() => showPassword(i)}
                    />
                  )}
                </td> */}
                  <td>{e.usertype}</td>
                </tr>

              )
            })}
        </tbody>
      </Table></>
  )
}

/*
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import Register from '../Components/Modal/Register'

export default function Admin() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [regmodal, setRegmodal] = useState(false);
  const [userTypeFilter, setUserTypeFilter] = useState("All");

  const Regtoggle = () => setRegmodal(!regmodal);

  useEffect(() => {
    const regData = JSON.parse(localStorage.getItem("RegisterData")) || [];
    setOriginalData(regData);
    setFilteredData(regData);
  }, []);

  useEffect(() => {
    filterData();
  }, [userTypeFilter]);

  const filterData = () => {
    if (userTypeFilter === "All") {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter(user => user.usertype === userTypeFilter);
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <Register modal={regmodal} toggle={Regtoggle} />

      <Button onClick={Regtoggle}>Add User</Button>
      <Form>
        <FormGroup>
          <Label for="usertype">Select type</Label>
          <Input
            id="usertype"
            name="select"
            value={userTypeFilter}
            type="select"
            onChange={(e) => setUserTypeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </Input>
        </FormGroup>
        <Button onClick={filterData}>OK</Button>
      </Form>
      <Table striped>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email Id</th>
            <th>Password</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.usertype}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
*/