
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
//navbar navbar-expand-lg navbar-dark bg-primary
import "./navbar.css";

import loginimage from "../images/logo.png";
import vmsContext from "../context/vmsContext";

const Navbar = () => {
const context = useContext(vmsContext);
const {user , setUser} =context;
const history = useHistory();



function autoRefresh() {
  window.location = window.location.href;
}
  const onLogout = () => {
    
    loggedin=false;
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("userid");
     window.sessionStorage.removeItem("role");
     window.sessionStorage.removeItem("isLoggedIn")
     window.sessionStorage.removeItem("name")
    
    history.push("/");
    autoRefresh();
  };

  var loggedin = false;
  var userid = sessionStorage.getItem("userid");

  if(userid)
   {
     loggedin=true;
   }  


   let role = sessionStorage.getItem("role");

   let name = sessionStorage.getItem("name");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav" style={{marginTop:"-20px"}}>
      <div className="container-fluid">
        <Link to={"/"}>
        <div className="logo">
          <img src={loginimage}  alt="not found" style={{height:"44px",marginBottom:"9px"}}></img>
          {/* <h2>
            <span>V</span>ehicle
            <span>M</span>anagement
          </h2> */}
        </div>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse move" id="navbarNavDropdown">
          <ul className="navbar-nav moveul">
            <li className="nav-item">
              <Link to="/userhome">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <span className="nav-link">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <span className="nav-link">Contact</span>
              </Link>
            </li>

            {!loggedin && (
              <li className="button">
                <Link to="/signin">
                  <span className="nav-link">SignIn</span>
                </Link>
              </li>
            )}
            {!loggedin && (
              <li className="signup">
                <Link to="/signup">
                  <button type="button" className="btn btn-secondary btn-lg">
                    SignUp
                  </button>
                </Link>
              </li>
            )}
          </ul>

          {loggedin && role == "ADMIN" && (
            <div>
              <li className="nav-item">
              <Link to="/adminhome">
                <span className="nav-link"style={{color:"gray"}}>ShowGarage</span>
              </Link>
            </li>
              
               
             
            </div>
          )}

      {loggedin && role == "SELLER" && (
            <div>
              <li className="nav-item">
              <Link to="/seller">
                <span className="nav-link"style={{color:"gray"}}>Dashboard</span>
              </Link>
            </li>
              
              

             
            </div>
          )}

{loggedin && role == "SELLER" && (
            <div>
              <li className="nav-item">
              <Link to="/services">
                <span className="nav-link"style={{color:"gray"}}>Showservices</span>
              </Link>
            </li>
              
              

             
            </div>
          )}
        
        
        {loggedin && role == "CUSTOMER" && (
            <div>
              
              <li className="nav-item">
              <Link to="/edituser">
                <span className="nav-link"style={{color:"gray"}}>EditProfile</span>
              </Link>
            </li>
            </div>
            
          )}
           {loggedin && role == "CUSTOMER" && (
            <div>
              
              <li className="nav-item">
              <Link to="/orderhistory">
                <span className="nav-link"style={{color:"gray"}}>OrderHistory</span>
              </Link>
            </li>
            </div>
            
          )}
        </div>
        <li className="name">
        <span className="nav-link"style={{color:"blue", marginLeft:"20px"}}>{name}</span>
        </li>
        {loggedin && (
          <div className="logout">
            {/* <h3 style={{marginLeft:"-90px",marginTop:"18px"}}>{userSignin.response.data.firstname}</h3>  */}
           
            {/* <button onClick={onLogout} className="btn btn-outline-danger">
              Logout
            </button> */}
            
              
            
             <li className="nav-item" >
          
             <Link to="/">
                <span onClick={onLogout}className="nav-link" style={{color:"gray"}}> Logout</span>
              </Link>
              
            </li>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
