import React from "react";
import { useEffect, useContext } from "react";
import vmsContext from "../context/vmsContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./registerservice.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import addservice from "../images/addservice.jpg";

function RegisterService() {
  const context = useContext(vmsContext);
  const {
    singleGarageData,
    setSingleGarageData,
    serviceName,
    setServiceName,
    description,
    setDescription,
    imagePath,
    setImagePath,
    category,
    setCategory,
    amount,
    setAmount
    
  } = context;
  var idfromgarage = singleGarageData.id;
  console.log("garageid   " + idfromgarage);
  
  const garageid = JSON.stringify(idfromgarage);
  const history = useHistory();

  const handleaddService = (e) => {
    e.preventDefault();
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .post("http://localhost:8080/garage/addserviceingarage/", {
        serviceName,
        description,
        category,
        garageid,
        amount,
        imagePath
        },options)
      .then(() => {
        history.push("/seller");
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return (
      <div style={{ backgroundImage:`url(${addservice})`} }>
          
        <section className="vh-100 gradient-custom">
          <div className=" py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{ borderradius: " 15px" }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                      <u>ADD SERVICE</u>
                    </h3>

                    <form>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <input
                            onChange={(e) => {
                                setServiceName(e.target.value);
                              }}
                              type="text"
                              id="serviceName"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">
                              Service Name
                            </label>
                          </div>
                        </div>

                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <input 
                            onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              type="textarea"
                              id="description"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">
                              Description
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                             onChange={(e) => {
                                setCategory(e.target.value);
                              }}
                              type="text"
                              id="category"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" >
                              Category
                            </label>
                          </div>
                        </div>
                      </div>
                      
                        <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                             onChange={(e) => {
                                setAmount(e.target.value);
                              }}
                              type="number"
                              id="emailAddress"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">
                              Amount
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <center>
                              <input
                              onChange={(e) => {
                                setImagePath(e.target.value);
                              }}
                                type="text"
                                id="imagePath"
                                className="form-control form-control-lg"
                              />
                            </center>
                            <label className="form-label">
                              Imagepath
                            </label>
                          </div>
                        </div>
                      </div>



                      <div className="col-md-12 mb-4 pb-2">
                        <Link to="/seller">
                          <button className="btn btn-warning btn-lg">
                            <span className="nav-link">GO BACK</span>
                          </button>
                        </Link>
                        {"            "}
                      
                        <button
                          onClick={handleaddService}
                          type="submit"
                          value="Submit"
                          className="btn btn-primary btn-lg"
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                        >
                          ADD
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default RegisterService;
