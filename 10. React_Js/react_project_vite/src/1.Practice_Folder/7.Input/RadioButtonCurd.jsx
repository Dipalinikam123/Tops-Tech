import { Eye, EyeOff, FileInput, XOctagon } from "lucide-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function RadioButtonCurd() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
    occupation: "",
    mobile: "",
    gender: "",
    hobbies: [],
  });

  let [arr, setArr] = useState([]);
  let [updateMode, setUpdateMode] = useState(false);
  let [updateIndex, setUpdateIndex] = useState(null);
  let [search, setSearch] = useState("");
  let [showPassIndex, setShowPassIndex] = useState([]);

  useEffect(() => {
    let jsonData = localStorage.getItem("dataArray");
    let normalData = JSON.parse(jsonData) || [];
    // setArr(normalData)

    //search
    let filterData = normalData?.filter(
      (e) => e.email.includes(search.toLowerCase()) || e.age.includes(search)
    );
    setArr(filterData);
  }, [search]);

  function submitBtn() {
    // console.log(user)
    if (user.email == "" && user.password == "") alert("Fill this field first");
    else setArr([...arr, user]);

    localStorage.setItem("dataArray", JSON.stringify([...arr, user]));

    // on click input in his initial state
    setUser({
      email: "",
      password: "",
      age: "",
      occupation: "",
      mobile: "",
      gender: "",
      hobbies: [],
    });
  }

  function deleteItem(index) {
    let filterData = arr?.filter((e, i) => i !== index);
    confirm("are youu sure") && setArr(filterData);
    localStorage.setItem("dataArray", JSON.stringify(filterData));
  }

  function deleteAll() {
    if (confirm("Do You Want To Delete All"))
      if (confirm("Are You Sure")) setArr([]);
    localStorage.removeItem("dataArray");
  }
  function updateHandler(data, index) {
    setUser(data);
    setUpdateIndex(index);
    setUpdateMode(true);
  }
  function handleUpdate() {
    if (updateIndex !== null) {
      const updatedArray = [...arr];
      updatedArray[updateIndex] = user;
      setArr(updatedArray);
      localStorage.setItem("dataArray", JSON.stringify(updatedArray));
      setUpdateMode(false);
      setUpdateIndex(null);
      setUser({
        email: "",
        password: "",
        age: "",
        occupation: "",
        mobile: "",
        gender: "",
        hobbies: [],
      });
    }
  }

  function showpwd(i) {
    console.log("========", i);
    setShowPassIndex([...showPassIndex, i]);
  }

  function hidepwd(index) {
    console.log("🚀 ~ file: RadioCheckBox.jsx:98 ~ hidepwd ~ index:", index);
    let hideEye = showPassIndex?.filter((i) => index !== i);
    setShowPassIndex(hideEye);
  }

  return (
    <>
      {/* <h1>Email is {user.email}</h1>
            <h1>password is {user.password}</h1> */}
      <div className="w-100">
        <Form className="w-50 border border-success border-3 p-3 m-auto">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              value={user?.email}
              name="email"
              placeholder="with a placeholder"
              type="email"
              onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              value={user?.password}
              name="password"
              placeholder="password placeholder"
              type="password"
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleage">Age</Label>
            <Input
              id="exampleage"
              value={user?.age}
              name="age"
              placeholder="age placeholder"
              type="number"
              onChange={(e) => setUser({ ...user, age: e?.target?.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleoccupation">Occupation</Label>
            <Input
              id="exampleoccupation"
              value={user?.occupation}
              name="occupation"
              placeholder="occupation placeholder"
              type="occupation"
              onChange={(e) =>
                setUser({ ...user, occupation: e?.target?.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplemobile">Mobile No.</Label>
            <Input
              id="examplemobile"
              value={user?.mobile}
              name="number"
              placeholder="mobile placeholder"
              type="number"
              onChange={(e, i) =>
                setUser({ ...user, mobile: e?.target?.value })
              }
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <label htmlFor="">Gender</label>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Male"
                  name="radio1"
                  checked={user.gender === "Male"}
                  onChange={(e, i) =>
                    setUser({ ...user, gender: e?.target?.value })
                  }
                />
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Female"
                  name="radio1"
                  checked={user.gender === "Female"}
                  onChange={(e, i) =>
                    setUser({ ...user, gender: e?.target?.value })
                  }
                />
                Female
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Other"
                  name="radio1"
                  checked={user.gender === "Other"}
                  onChange={(e, i) =>
                    setUser({ ...user, gender: e?.target?.value })
                  }
                />{" "}
                Other
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup row>
            <Label for="checkbox2">Hobbies :-</Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox1"
                    value="Reading"
                    checked={user.hobbies.includes("Reading")}
                    onChange={(e, i) =>
                      setUser({
                        ...user,
                        hobbies: [...user.hobbies, e?.target?.value],
                      })
                    }
                  />{" "}
                  Reading
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox2"
                    value="Writting"
                    checked={user.hobbies.includes("Writting")}
                    onChange={(e, i) =>
                      setUser({
                        ...user,
                        hobbies: [...user.hobbies, e?.target?.value],
                      })
                    }
                  />
                  Writting
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox3"
                    value="Drawing"
                    checked={user.hobbies.includes("Drawing")}
                    onChange={(e, i) =>
                      setUser({
                        ...user,
                        hobbies: [...user.hobbies, e?.target?.value],
                      })
                    }
                  />{" "}
                  Drawing
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <Button
            color="success"
            className="w-100"
            onClick={updateMode ? handleUpdate : submitBtn}
          >
            {updateMode ? "Update" : "Submit"}
          </Button>
        </Form>

        <div className="w-50 m-auto p-3 d-flex justify-content-center">
          <Button className="bg-dark w-25 " onClick={() => deleteAll()}>
            Delete All
          </Button>
        </div>
      </div>

      <div className="bg-danger">
        <label htmlFor="search" className="ms-3 fs-4 text-light">
          Search Here
        </label>
        <br />
        <input
          type="text"
          className="w-25 p-1 border rounded m-3 "
          onChange={(e) => setSearch(e?.target?.value)}
          placeholder="search"
        />

        <Table>
          <thead>
            <tr>
              <th>sr</th>
              <th>E-mail</th>
              <th>Password</th>
              <th>show password</th>
              <th>Age</th>
              <th>Occupation</th>
              <th>Mobile No.</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Delete</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {arr?.length === 0 ? (
              <tr>
                <td colSpan="11" style={{ textAlign: "center" }}>
                  Data not found
                </td>
              </tr>
            ) : (
              arr?.map((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{e.email}</td>
                    <td>{showPassIndex?.includes(i) ? e.password : "****"}</td>
                    <td>
                      {showPassIndex?.includes(i) ? (
                        <Eye
                          color="#732121"
                          role="button"
                          onClick={() => hidepwd(i)}
                        />
                      ) : (
                        <EyeOff
                          color="#732121"
                          role="button"
                          onClick={() => showpwd(i)}
                        />
                      )}
                    </td>
                    <td>{e.age}</td>
                    <td>{e.occupation}</td>
                    <td>{e.mobile}</td>
                    <td>{e.gender}</td>
                    <td>{e?.hobbies?.join("-")}</td>
                    <td>
                      <XOctagon
                        color="#732121"
                        role="button"
                        onClick={() => deleteItem(i)}
                      />
                    </td>
                    <td>
                      <FileInput
                        color="#732121"
                        role="button"
                        onClick={() => updateHandler(e, i)}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

/*
hoby a,b,c,d,e
a-c-e
male


*/
