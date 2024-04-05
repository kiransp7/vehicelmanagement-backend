import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import vmsContext from "../context/vmsContext";

function SellerServices() {
  const context = useContext(vmsContext);

  const {
    sellerservice,
    setSellerService,
    singleGarageData,
    setSingleGarageData,
  } = context;

  var idfromgarage = singleGarageData.id;
  console.log("garage " + idfromgarage);

  function getServices() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
     
        .get(`http://localhost:8080/garage/showsallservices/${idfromgarage}`,options)
      .then((response) => {
        setSellerService(response.data);
        console.log("Seller = "+response.data)
      });
  }

  //   function handleDelete(id) {
  //     console.log(id);

  //     axios
  //       .delete("http://localhost:8080/garage/removegarage/" + id)
  //       .then(() => {
  //         getServices();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className=" table-responsive">
        <br></br>
        <br></br>
        <center>
          <table className="table table-bordered table-hover ">
            <thead className="thead-dark">
              <tr className="bg-dark text-white ">
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>ServiceID</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>ServiceName</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>Description</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>Category</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>Amount</h3>
                </th>
              </tr>
            </thead>

            <tbody>
              {sellerservice.map((service) => {
                return (
                    <tr style={{height:"50px"}}key={service.id}>
                    <td style={{textAlign:"center"}}><h4>{service.id}</h4></td>
                    <td style={{textAlign:"center"}}><h4>{service.providedService.serviceName}</h4></td>
                    <td style={{textAlign:"center"}}><h4>{service.providedService.description}</h4></td>
                    <td style={{textAlign:"center"}}><h4>{service.providedService.category}</h4></td>
                    <td style={{textAlign:"center"}}><h4>{service.amount}</h4></td>

                    {/* <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(garage.id) } }}>Delete</button></td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default SellerServices;
