import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../screen/sign.css";
import loginimage from "../images/login.jpg";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const context = useContext(vmsContext);
  const { email, setEmail, password, setPassword, user, setUser } = context;

  // const [user , setUser] = useState([]);

  const history = useHistory();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [cap, setCap] = useState(false);

  const handleonChange = (value) => {
    setCap((current) => !current);
  };


  

  const handleSubmit = (e) => {

    if (!email) setEmailError("Email is required");
    else setEmailError("");
    if (!password) setPasswordError("Password Is Required ");
    else setPasswordError("");
    
    e.preventDefault();
    axios
      .post("http://localhost:8080/authenticate", {
        email,
        password,
      })
      .then((response) => {
        sessionStorage.setItem("token",response.data);
        getUserDetails();      
      });
  };





  const getUserDetails = () => {
    const data = JSON.stringify({
      email,
      password,
    });

    const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    };
    axios.post("http://localhost:8080/login", data, options).then(
      (response) => {
        console.log(response);
        setUser(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  


  useEffect(() => {
  
    
    if (user && user.status === "success" && user.data.role === "ADMIN") {
     
      sessionStorage.setItem("userid", user.data.id);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", user.data.role);
      sessionStorage.setItem("name", user.data.firstname);
    
      history.push("/adminhome");
    } else if (
      user &&
      user.status === "success" &&
      user.data.role === "SELLER"
    ) {
      sessionStorage.setItem("user", user.data);
      sessionStorage.setItem("userid", user.data.id);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", user.data.role);
      sessionStorage.setItem("name", user.data.firstname);

      history.push("/seller");
    } else if (
      user &&
      user.status === "success" &&
      user.data.role === "CUSTOMER"
    ) {
      sessionStorage.setItem("user", user.data);
      sessionStorage.setItem("username",user.data.firstname );
      sessionStorage.setItem("lastname",user.data.lastname );
      sessionStorage.setItem("email",user.data.email );
      sessionStorage.setItem("password",user.data.password);
      sessionStorage.setItem("contact",user.data.contact);
      sessionStorage.setItem("userid", user.data.id);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", user.data.role);
      sessionStorage.setItem("name", user.data.firstname);

      history.push("/userhome");
    } else if (user && user.status === "error") {
      alert(user.error);
    }
  }, [user]);

  return (
    <div>
 

      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" /> */}
              <img src={loginimage} alt="not found " className="image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* <form> */}
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h1 className="">SIGN IN HERE</h1>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <h6 className="text-danger text-center my-4">{emailError}</h6>
              </div>
              {/* Password input */}
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
              <div className="d-flex justify-content-between align-items-center">
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div>
                <ReCAPTCHA
                  sitekey="6LfhMBQiAAAAAAkhQxga6bW9zH9hLd23zHpGSuLe"
                  onChange={handleonChange}
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={handleSubmit}
                  //disabled={!cap}
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                
               
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/signup" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
