import { useEffect, useState } from "react";


import "../screen/signup.css";
import loginimage from "../images/login.jpg";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [contact, setContact] = useState("");
  // const [role, setRole] = useState("");

  const context = useContext(vmsContext);
  const history = useHistory();
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
    encPassword,
    setEncPassword

  } = context;

  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contactError, setContactError] = useState("");
  // const [roleError, setRoleError] = useState("");

  const handleSubmit = (e) => {
    if (!firstname) setFirstNameError("First Name is mandatory!!!");
    else setFirstNameError("");

    if (!lastname) setLastNameError("Last Name is mandatory !!!");
    else setLastNameError("");

    if (!email) setEmailError("Email is required !!!");
    else setEmailError("");

    if (!password) setPasswordError("Password is required !!!");
    else setPasswordError("");

    if (!contact) setContactError("Mobile no. is required !!!");
    else setContactError("");

    e.preventDefault()
    axios
      .post("http://localhost:8080/signup/", {
        firstname,
        lastname,
        encPassword,
        contact,   
        email,

      
      })
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };



  


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
                <h1 className="">SIGN UP HERE</h1>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>

              <div className="form-outline mb-4">
                <input
             
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter first name"
                />
                <label className="form-label" htmlFor="form3Example3">
                  FirstName
                </label>
                <h6 className="text-danger text-center my-4">
                  {firstnameError}
                </h6>
              </div>

              <div className="form-outline mb-3">
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter last name"
                />
                <label className="form-label" htmlFor="form3Example4">
                  LastName
                </label>
                <h6 className="text-danger text-center">{lastnameError}</h6>
              </div>
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Email
                </label>
                <h6 className="text-danger text-center">{emailError}</h6>
              </div>
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <h6 className="text-danger text-center">{passwordError}</h6>
              </div>
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter contact no"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Contact
                </label>
                <h6 className="text-danger text-center">{contactError}</h6>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={handleSubmit}
                 
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  SignUp
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
