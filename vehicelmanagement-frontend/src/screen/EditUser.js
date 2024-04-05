import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import vmsContext from "../context/vmsContext";
import loginimage from "../images/login.jpg";
import axios from "axios";


function EditUser() {
    const history = useHistory();
  const context = useContext(vmsContext);
  const {
    firstname,
    setFirstName,
    lastname,
    setLastName,
    password,
    setPassword,
    contact,
    setContact,
    email,
    setEmail,
  } = context;

  const updateUser = (e) => {
    e.preventDefault();
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .put(
        `http://localhost:8080/user/updateprofile/${sessionStorage.getItem(
          "userid"
        )}`,
        {
          firstname,
          lastname,
          email,
          password,
          contact,
        },options
      )
      .then(() => {
        history.push("/userhome");
      })
      .catch((err) => {
        console.log(err);
      });
  };

 


const ufname = sessionStorage.getItem("username")
const ulname = sessionStorage.getItem("lastname")
const uemail = sessionStorage.getItem("email")
const upassword = sessionStorage.getItem("password")
const ucontact = sessionStorage.getItem("contact")

  
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={loginimage} alt="not found " className="image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 register">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h1 className="">EDIT YOUR PROFILE HERE</h1>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>
              <form>
              <div className="form-outline mb-4">
                <input
                 
                 type="text"
                  className="form-control form-control-lg"
                  name="firstname"
                  placeholder={ufname}
                 
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <label className="form-label" htmlFor="form3Example3">
                  FirstName
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                   name="lastname"
                   placeholder={ulname}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                 
                />
                <label className="form-label" htmlFor="form3Example4">
                  LastName
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                   name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control form-control-lg"
                   placeholder={uemail}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Email
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control form-control-lg"
                   placeholder={upassword}
                  name="password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                 name="contact"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                   placeholder={ucontact}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Contact
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                    onClick={updateUser}
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Update
                </button>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditUser;
