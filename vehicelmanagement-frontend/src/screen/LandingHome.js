import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./landinghome.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import homepage from "../images/homepage.jpeg";

import "./landinghome.css";

import carWashing from "../images/carWashing.jpg";
import tyre from "../images/tyre.jpeg";
import carac from "../images/carac.jpg";
import oilchange from "../images/oilchange.jpeg";
import nanoceramicoating from "../images/nanoceramicoating.jpg";
import carelectrical from "../images/carelectrical.jpg";
import tefloncoatingimage2 from "../images/tefloncoatingimage2.jpg";

import paintjobimage from "../images/paintjobimage.png";

import serviceicon from "../images/serviceicon.webp";
import customercare from "../images/customercare.png";
import multipleservice from "../images/multipleservice.jpg";
import article from "../images/article.png";
import stepstobook from "../images/stepstobook.png";
import allautomobiles from "../images/allautomobiles.png";

function LandingHome() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              style={{ height: "500px", width: "100%" }}
              src={homepage}
              alt="First slide"
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row" style={{ height: "170px" }}>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h1 style={{ fontSize: "50px" }}>
            <b>Our Services</b>
            <br></br>
          </h1>
          <center>
            <h2 style={{ height: "100px" }}>
              We offer full Auto-Repair and Maintenance Service.{" "}
              <h1 style={{ color: "yellow" }}>
                <b>_______________</b>
              </h1>
            </h2>
          </center>
        </center>
      </div>

      <div className="row" style={{ color: "white" }}>
        <section className="team">
          <div className>
            <div className="row">
              <div className="col-lg-2 col-md-3 d-flex align-items-stretch">
                <div className="member">
                  <img src={carWashing} alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 d-flex align-items-stretch">
                <div className="member">
                  <img src={carac} alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 d-flex align-items-stretch">
                <div className="member">
                  <img src={tyre} style={{ height: "140px" }} alt="" />
                </div>
              </div>

              <div className="col-lg-2 col-md-4 d-flex align-items-stretch">
                <div className="member">
                  <img src={oilchange} alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src={nanoceramicoating}
                    style={{ height: "115px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex align-items-stretch">
                <div className="member">
                  <img src={carelectrical} alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src={tefloncoatingimage2}
                    style={{ height: "115px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 d-flex align-items-stretch">
                <div className="member">
                  <img src={paintjobimage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="row" style={{ height: "170px" }}>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h1 style={{ fontSize: "50px" }}>
            <b>We Provide Expert Service</b>
            <br></br>
          </h1>
          <center>
            <h2 style={{ height: "100px" }}>
              We aim to earn your trust and have a long term relationship with
              you{" "}
              <h1 style={{ color: "yellow" }}>
                <b>_______________</b>
              </h1>
            </h2>
          </center>
        </center>
      </div>

      {/*  ------------------------------------------------------------------------- */}

      <div className="row" style={{ color: "white" }}>
        <section className="team">
          <div className>
            <div className="row">
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch">
                <div className="member">
                  <img src={serviceicon} style={{ height: "200px" }} alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 d-flex align-items-stretch">
                <div className="member">
                  <img src={customercare} style={{ height: "200px" }} alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src={multipleservice}
                    style={{ height: "200px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* ______________________________________________________________________________________________ */}
      <div className="row " style={{ backgroundImage: `url(${article})` }}>
        {/* <div className="row container" style={{ backgroundColor:"black" ,borderRadius:"30px"} } > */}
        <div className="col">
          <h1 style={{ color: "yellow", height: "200px" }}></h1>
        </div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
          <br></br>
          <br></br>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
          <br></br>
          <br></br>
        </div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
        </div>
      </div>
      {/* _________________________________________________________________________________ */}
      <br></br>
      <br></br>
      <br></br>
      <div className="row" style={{ height: "170px" }}>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h1 style={{ fontSize: "50px" }}>
            <b>How It Works</b>
            <br></br>
          </h1>
          <center>
            <h2 style={{ height: "100px" }}>
              Booking your required services became easy by VSI's 4 Step Proces{" "}
              <h1 style={{ color: "yellow" }}>
                <b>_______________</b>
              </h1>
            </h2>
          </center>
        </center>
      </div>

      <div className="row " style={{ backgroundImage: `url(${stepstobook})` }}>
        {/* <div className="row container" style={{ backgroundColor:"black" ,borderRadius:"30px"} } > */}
        <div className="col">
          <h1 style={{ color: "yellow", height: "200px" }}></h1>
        </div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
          <br></br>
          <br></br>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
          
        </div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
        </div>
      </div>

      {/* ________________________________________________________ */}


      
      
      <div className="row" style={{ height: "170px" }}>
        <br></br>
        
        <center>
          <h1 style={{ fontSize: "50px" }}>
            <b>We Repair All Makes of Automobiles</b>
            <br></br>
          </h1>
          <center>
            <h2 style={{ height: "100px" }}>
            We work with all makes and models of vehicles{" "}
              <h1 style={{ color: "yellow" }}>
                <b>_______________</b>
              </h1>
            </h2>
          </center>
        </center>
      </div>

      <div className="row " style={{ backgroundImage: `url(${allautomobiles})` }}>
        {/* <div className="row container" style={{ backgroundColor:"black" ,borderRadius:"30px"} } > */}
        
        <div className="w-100"></div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
          
          <br></br>
        </div>
        <div className="col">
          <h1 style={{ color: "white", height: "200px" }}></h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>




















    </div>
  );
}

export default LandingHome;
