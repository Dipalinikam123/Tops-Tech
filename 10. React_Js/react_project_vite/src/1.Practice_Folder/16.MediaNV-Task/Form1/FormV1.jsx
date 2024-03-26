import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import FormV2 from "../Form2/FormV2";
import { Edit, Eye, EyeOff, Slice, Trash } from "lucide-react";

export default function FormV1() {
  let initialisation = {
    email: "",
    password: "",
    age: "",
    city: "",
  };

  useEffect(() => {
    // Fetch data from localStorage when component mounts
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setPrint(JSON.parse(storedUser));
    }
  }, []);

  let [user, setUser] = useState(initialisation);
  let [print, setPrint] = useState([]);
  let [index, setIndex] = useState("");
  let [showPwd, setShowPwd] = useState([]);

  console.log("🚀 ~ FormV1 ~ user:", user);

  const submitForm = () => {
    setPrint([...print, user]);
    localStorage.setItem("user", JSON.stringify([...print, user]));
    setUser(initialisation);
  };
  const deleteItem = (id) => {
    let deleteId = print?.filter((e, i) => i !== id);
    console.log("🚀 ~ deleteItem ~ deleteId:", deleteId);
    setPrint(deleteId);
    localStorage.setItem("user", JSON.stringify(deleteId));
  };
  const editItem = (data, index) => {
    setUser(data);
    setIndex(index);
  };
  const updateForm = () => {
    if (index || index === 0) 
   { print.splice(index, 1, user);}
    setPrint([...print]);
    setUser(initialisation);
    setIndex(null);
  };
  const passShow = (pwdId) => {
    console.log("🚀 ~ passShow ~ pwdId:", showPwd);
    setShowPwd([...showPwd, pwdId]);
  };
  const passHide = (id) => {
    let hide = showPwd?.filter((i) => i !== id);
    console.log("🚀 ~ passHide ~ hide:", hide)
    setShowPwd(hide);
  };
  console.log("indexxxxxxx", index);
  // console.log("🚀 ~ updateForm ~ print.splice(index, 1, user);:", print.splice(index, 1, user))
  //   console.log("====pp===", print);

  return (
    <>
      <div className="w-100 d-flex gap-3 p-4">
        <div className="w-50 m-auto p-4 border border-3 border-dark bg-light mt-5 ">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                value={user?.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                value={user?.password}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleage">Age</Label>
              <Input
                id="exampleage"
                name="age"
                placeholder="age placeholder"
                type="number"
                onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                value={user?.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplenumber">City</Label>
              <Input
                id="examplecity"
                name="city"
                placeholder="city placeholder"
                type="text"
                onChange={(e) => setUser({ ...user, city: e?.target?.value })}
                value={user?.city}
              />
            </FormGroup>
            <Button className="w-100 bg-danger" onClick={() => submitForm()}>
              Submit
            </Button>
            <Button
              className="w-100 bg-danger mt-3"
              onClick={() => updateForm()}
            >
              Update
            </Button>
          </Form>
        </div>

        <FormV2 user={user} setUser={setUser} initialisation={initialisation} />
      </div>
      <div className="w-75 m-auto p-4 border border-3 border-dark bg-warning mt-5 ">
        <Table>
          <thead>
            <tr>
              <th>SR</th>
              <th>Email</th>
              <th>Password</th>
              <th>Show</th>
              <th>Age</th>
              <th>City</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {print.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{showPwd.includes(i) ? e.password : "********"}</td>
                  <td>
                    {showPwd.includes(i) ? (
                      <Eye role="button" onClick={() => passHide(i)} />
                    ) : (
                      <EyeOff role="button" onClick={() =>passShow(i)  } />
                    )}
                  </td>
                  <td>{e.age}</td>
                  <td>{e.city}</td>
                  <td>
                    <Trash role="button" onClick={() => deleteItem(i)} />
                  </td>
                  <td>
                    <Edit role="button" onClick={() => editItem(e, i)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
