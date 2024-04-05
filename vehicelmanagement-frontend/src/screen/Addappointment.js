import React from "react";
import { useEffect, useContext } from "react";
import vmsContext from "../context/vmsContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./addappointment.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import addservice from "../images/addservice.jpg";

function Addappointment() {
  const context = useContext(vmsContext);
  const {
    singleGarageData,
    setSingleGarageData,
    servicetime,
    setServiceTime
    
    
  } = context;
  var idfromgarage = singleGarageData.id;
  console.log("garageid   " + idfromgarage);
  
 const garageId = JSON.stringify(idfromgarage);
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
      .post("http://localhost:8080/garage/slot/", {
       
      garageId,
        servicetime
        
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
                      <u>ADD APPOINTMENT</u>
                    </h3>

                    <form>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <input
                            onChange={(e) => {
                                setServiceTime(e.target.value);
                              }}
                              type="text"
                              id="serviceName"
                              className="form-control form-control-lg"
                              placeholder="2023-02-22 19:22:12"
                            />
                            <label className="form-label">
                              Service Time
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

export default Addappointment;
