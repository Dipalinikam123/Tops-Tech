import React, { useEffect, useState } from "react";
import FormModel from "../Model/FormModel";
import { Button } from "reactstrap";
import TablePrintApi from "../Model/TablePrintApi";
import axios from "axios";

let field = {
  title: "",
  description: "",
  brand: "",
  gender: "",
  price: "",
  thumbnail: "",
  discountPercentage: "0",
  category: [],
  color: [],
  size: [],
};

export default function Product() {
  // let [user, setUser] = useState(field);
  const [modal, setModal] = useState(false);

  //table
  let [allData, setAllData] = useState([]);
  let [fetchFlag, setFetchFlag] = useState(true); //for re-render page
  let [editData, setEditData] = useState(field);
  const reFetchData = () => setFetchFlag(!fetchFlag);
  const toggle = () => setModal(!modal);

  // all api call in main page
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log("first", res?.data);
        setAllData(res?.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [fetchFlag]); // whenever fetchFlag state change this useEffect call

  const deleteItem = (id) => {
    console.log("🚀 ~ deleteItem ~ id:", id);
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        alert("successfully deleted...!");
        reFetchData();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const editHandeler = (data) => {
    console.log("🚀 ~ editHandeler ~ data:", data);
    toggle();
    setEditData(data);
    // console.log("🚀 ~ editHandeler ~ data:", editData);
  };
  // ==============================================================

  const submitHandeler = (data) => {
    console.log("🚀 ~ submitHandeler ~ data:", data);
    axios({
      method: "post",
      url: `http://localhost:9999/product/create`,
      data: data,
    })
      .then((res) => {
        console.log("======>>>>>>>", res);
        alert("success.....");
        toggle();
        setEditData(field);
        reFetchData();
      })
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err);
        alert("errorrr");
      });
  };

  const updateHandeler = (newData) => {
    console.log("🚀 ~ updateHandeler ~ newData:", newData);
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${newData?._id}`,
      data: newData,
    })
      .then((res) => {
        // console.log("======>>>>>>>", res);
        toggle();
        alert("Updated");
        reFetchData();
      })
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err.response.error);
        alert("errorrr");
      });
    console.log("....>>>>");
  };

  return (
    <>
      <FormModel
        modal={modal}
        toggle={toggle}
        field={field}
        editData={editData}
        submitHandeler={submitHandeler}
        updateHandeler={updateHandeler}
        // user={user}
        // setUser={setUser}
        // refresh={refresh}
      />
      <div
        style={{ width: "100%", padding: "10px", backgroundColor: "lightblue" }}
      >
        <div className="w-100 d-flex justify-content-end mb-5">
          <Button color="danger" onClick={toggle}>
            Add Product
          </Button>
        </div>
        <div className="w-100 d-flex justify-content-start">
          <TablePrintApi
            productAllData={allData}
            editHandeler={editHandeler}
            deleteItem={deleteItem}
            // setUser={setUser}
            // refresh={refresh}
            // render={render}
          />
        </div>
      </div>
    </>
  );
}
