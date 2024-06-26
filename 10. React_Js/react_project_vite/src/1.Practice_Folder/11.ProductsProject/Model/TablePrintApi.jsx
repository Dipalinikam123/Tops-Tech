import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { FileCheck2, Trash2 } from "lucide-react";
import "./productTable.css";
// import { colors } from "react-select/dist/declarations/src/theme";

export default function TablePrintApi({
  productAllData,
  editHandeler,
  deleteItem,
}) {
  let [allData, setAllData] = useState([]); //useState(productAllData) / first time call blank that's why set in useEffect
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    setAllData(productAllData);
  }, [productAllData]);

  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Table className=" border border-2 border-dark border-rounded-1">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Action</th>
              <th>Edit</th>
              <th>Image</th>
              <th>Title Name</th>
              <th>Description Name</th>
              <th>Brand Name</th>
              <th>Gender</th>
              <th>Price</th>
              <th>Thumbnail</th>
              <th>Discount</th>
              <th>Category</th>
              <th>color</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((e, i) => {
              const isExpanded = e?._id === expandedId;
              // console.log("🚀 ~  e?._id === expandedI:", e?._id === expandedId);
              // console.log("🚀 ~ {allData?.map ~ isExpanded:", isExpanded);
              // console.log("🚀 ~ {allData?.map ~ e?._id:", e?._id);
              // console.log("🚀 ~ expandedId:", expandedId);
              return (
                <tr key={e?._id}>
                  <td>{i + 1}</td>
                  <td>
                    <Trash2
                      color="red"
                      role="button"
                      onClick={() => deleteItem(e?._id)}
                    />
                  </td>
                  <td>
                    <FileCheck2
                      color="red"
                      role="button"
                      onClick={() => editHandeler(e)}
                    />
                  </td>
                  <td>
                    <img style={{ width: "100px" }} src={e?.thumbnail} />
                  </td>
                  <td>{e?.title}</td>

                  <td>
                    <div
                      style={{
                        maxWidth: "150px",
                        whiteSpace: isExpanded ? "unset" : "nowrap",
                        overflow: "hidden",
                        textOverflow: isExpanded ? "unset" : "ellipsis",
                      }}
                      onClick={() => setExpandedId(isExpanded ? null : e?._id)}
                    >
                      {e?.description}
                    </div>
                  </td>

                  <td>{e?.brand}</td>
                  <td>{e?.gender}</td>
                  <td>
                    Price: {e?.price}
                    {e?.discountPercentage && (
                      <>
                        <div className="mb-1 mt-1 p-1 border text-light text-center rounded-5 bg-success border-success">
                          {e?.discountPercentage} %
                        </div>
                        Total:
                        {calculateDiscountedPrice(
                          e?.price,
                          e?.discountPercentage
                        ).toFixed(2)}
                      </>
                    )}
                  </td>
                  <td>
                    <div
                      style={{
                        maxWidth: "150px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {e?.thumbnail}
                    </div>
                  </td>
                  <td>{e?.discountPercentage}</td>
                  <td>{e?.category.join(",")}</td>

                  <td>
                    <div
                      style={{
                        maxWidth: "150px",
                      }}
                    >
                      {e?.color.map((e, i) => (
                        <div className="d-flex align-items-center">
                          <div
                            key={i}
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor: e,
                              marginRight: "5px",
                              border: "1px solid black",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <div>{e}</div>
                        </div>
                      ))}
                    </div>
                    {/* {e?.color.join(",")} */}
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        // gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "5px",
                      }}
                    >
                      {["42", "43", "44", "45"]?.map((size, i) => (
                        <div key={i}>
                          <div
                            className={`${
                              e?.size.includes(size)
                                ? "text-dark fw-bold"
                                : "text-muted"
                            }`}
                          >
                            {size}
                          </div>
                        </div>
                      ))}
                    </div>
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
