import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";

function OrderHistory() {
  const context = useContext(vmsContext);
  const { orderhistory, setOrderhistory } = context;

  function getOrderHistory() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get(
        `http://localhost:8080/user/vieworderhistory/${sessionStorage.getItem(
          "userid"
        )}`,options
      )
      .then((response) => {
        setOrderhistory(response.data);
      });
  }

  useEffect(() => {
    getOrderHistory();
    console.log(orderhistory);
  }, []);
  return (
    <>
      <div className="row" style={{ height: "100px" }}>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <br></br>
          <br></br>
          <br></br>
          <h6 style={{ fontSize: "30px" }}>
            <b>ORDER HISTORY</b>
          </h6>
        </center>
      </div>
      <div className="container">
        <div className="table responsive">
          <table className="table table-bordered table-hover ">
            <thead className="thead-dark">
              <tr className="bg-dark text-white ">
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>GARAGE NAME</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>ORDER CREATED ON</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>SERVICE TIME</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>CITY</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>GARAGE CONTACT</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>TOTAL AMOUNT</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {orderhistory.map((order) => {
                return (
                  <tr>
                    <td><h4>{order.garageName}</h4></td>
                    <td><h4>{order.createdOn}</h4></td>
                    <td><h4>{order.servicetime}</h4></td>
                    <td><h4>{order.city}</h4></td>
                    <td><h4>{order.garageContact}</h4></td>
                    <td><h4>{order.totalAmount}</h4></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
