import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import "../screen/footer.css";
import footerLogo from "../images/logo.png";



function Footer() {
  return (
    <div className="blockcode">
  {/* <div className="header">Footer</div>
  <div className="description">Footer</div> */}
  <footer className="shadow">
    <div
      className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
      style={{ width: "80%" }}
    >
      {/* <a href="/#" className="d-flex align-items-center p-0 text-dark">
        <img alt="logo" src={footerLogo} width="30px" className="" />
        <span className="ml-4 h5 font-weight-bold">
          Vehicle Service Management
        </span>
      </a> */}
      <small><h4 style={{marginLeft:"310px"}}>© VehicleServiceManagement , 2023. All rights reserved.</h4></small>
      <div>
        <button className="btn btn-dark btn-flat p-2 iconsSpace">
          <i className="fa fa-facebook iconsSpace" /> 
        </button>
        <button className="btn btn-dark btn-flat p-2 iconsSpace">
          <i className="fa fa-twitter iconsSpace" />
        </button>
        <button className="btn btn-dark btn-flat p-2 iconsSpace">
          <i className="fa fa-instagram iconsSpace" /> 
        </button>
        <button className="btn btn-dark btn-flat p-2 iconsSpace">
          <i className="bi bi-youtube iconsSpace" /> 
        </button>
      </div>
    </div>
  </footer>
</div>
  );

}

export default Footer;