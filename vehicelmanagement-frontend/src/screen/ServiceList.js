import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";

function ServiceList() {
  const context = useContext(vmsContext);

  const {
    selectedGarage,
    services,
    setServices,
    setSelCategory,
    cartItems,
    setCartItems,
    cart,
    setCart,
    selservice,
    setSelService,
  } = context;

  var CategoryFromSession = sessionStorage.getItem("CategoryId");

  setSelCategory(CategoryFromSession);

  function getServiceList() {
    axios
      .get(
        `http://localhost:8080/garage/showsallservices/${selectedGarage}/${sessionStorage.getItem(
          "CategoryId"
        )}`
      )
      .then((response) => {
        setServices(response.data);
      });
  }

  function getCart() {
    axios
      .get(
        `http://localhost:8080/user/showcart/${sessionStorage.getItem(
          "userid"
        )}`
      )
      .then((response) => {
        setCart(response.data);
      });
  }

  function addServicetoCart() {
    axios
      .post(
        `http://localhost:8080/user/addcartitem/${sessionStorage.getItem(
          "userid"
        )}/${selservice}`
      )
      .then((response) => {
        getCart();
        showcartItems();
      });
  }

  function showcartItems() {
    axios
      .get(
        `http://localhost:8080/user/showcartitem/${sessionStorage.getItem(
          "userid"
        )}`
      )
      .then((response) => {
        setCartItems(response.data);
      });
  }

  

  useEffect(() => {
    getServiceList();
    getCart();
    showcartItems();
    sessionStorage.removeItem("CategoryId");
    console.log("method is called");
  }, []);

  const AddtoCart = (id) => {
    console.log(id);
    setSelService(`${id}`);
    console.log(`${selservice}`);
    addServicetoCart();
  };

  const renderList = services.map((service) => {
    return (
      <div className="ui four column" key={service.id}>
        <div className="ui link cards" style={{ margin: "50px" }}>
          <div className="card">
            <div className="content">
              <div className="header">
                {" "}
                {service.providedService.serviceName}{" "}
              </div>
              <div className="meta ">
                {" "}
                {service.providedService.description}{" "}
              </div>
              <div className="meta"> {service.providedService.category} </div>
              <div className="meta"> {service.amount} </div>
              <div>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    AddtoCart(service.id);
                  }}
                >
                  {" "}
                  Add to Cart{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const itemList = cartItems.map((item) => {
    return (
      <div className="ui four column" key={item.id}>
        <div className="ui link cards">
          <div className="card">
            <div className="content">
              <div className="header">
                {" "}
                {item.selectedService.providedService.serviceName}{" "}
              </div>
              <div className="header"> {item.selectedService.amount} </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>{renderList}</td>

            <td>
              <div className="ui link cards">
                <div className="card">
                  <div className="content">
                    <div className="header"> Cart </div>
                    <div className="meta "> {cart.totalCartPrice} </div>
                    <div className="meta"> {cart.totalItems} </div>
                    <div className="meta"> {cart.lastUpdatedOn} </div>
                  </div>
                </div>
              </div>

              <div>{itemList}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ServiceList;
