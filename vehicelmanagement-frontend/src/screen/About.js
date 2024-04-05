import React from "react";
 import about from "../images/about2.jpg";

import amaron from "../images/amaron.png";
import apollo from "../images/apollo.jpg";
import bridgestone from "../images/bridgestone.jpg";
import ceat from "../images/ceat.png";
import mahindra from "../images/mahindra.jpg";
import michelin from "../images/michelin.jpg";
import exide from "../images/exide.png";

import "../screen/about.css";

function About()
{
return(<>

<div>
        
        <h1 className="title">
          {" "}
          <center>
            <br></br>
          <h1 style={{ fontSize: "50px" }}>
            <b>ABOUT US</b>
            <h1 style={{ color: "yellow" }}>
                <b>_______________</b>
              </h1>
          </h1>
          
          </center>
        </h1>

        {/* ======= About Section ======= */}
        <br></br>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={about} className="img-fluid imageShadow " alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>
                  VSM aims to be the best of both worlds - Reliable and
                  Cost-effective Car Services
                </h3> <br></br>

                <p className="fst-italic">
                  Car Servicing, Car repairs and Car cleaning - we are your
                  one-stop solution for all things cars.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> VSM provide you car
                    wash, car servicing, car detailing and much more... Enjoy
                    the comfort of your own car.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    Stay in the comforts of your home or office and make the
                    most of our complimentary pick-up and drop-in service. Count
                    on us to be your personal car care expert, advisor and car
                    mechanic.
                  </li>
                </ul>
                <p>
                  - VSM is a network of technology-enabled car service centres,
                  offering a seamless car service experience at the convenience
                  of a tap. With our highly skilled technicians, manufacturer
                  recommended procedures and the promise of genuine spare parts
                  we are your best bet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="counts">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={232}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Happy Clients</strong> <br></br>Our goal to make happy clients
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={521}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Genuine Parts</strong> <br></br> Promise of genuine spare parts
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={1463}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Hours Of Support</strong> <br></br>
                    24×7 Support
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-people" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={15}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Service Guarantee</strong> <br></br>Don't worry about car our Mechanics take care of your car
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-title">
              <h2>Clients</h2>
            </div> 

        <section className="clients">
          <div className="container">
          
           

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
              <br></br>
                <div className="swiper-slide">
                  <img src={amaron} className="img-fluid imageSize clientsImage" alt="" />
                </div> <br></br>
                <div className="swiper-slide">
                  <img src={apollo} className="img-fluid imageSize clientsImage" alt="" />
                </div> <br></br>
                <div className="swiper-slide">
                  <img src={exide} className="img-fluid imageSize clientsImage " alt="" />
                </div> <br></br>
                <div className="swiper-slide">
                  <img src={bridgestone} className="img-fluid imageSize clientsImage " alt="" />
                </div> <br></br>
                <div className="swiper-slide">
                  <img src={ceat} className="img-fluid imageSize clientsImage " alt="" />
                </div> <br></br>
                <div className="swiper-slide">
                  <img src={mahindra} className="img-fluid imageSize clientsImage " alt="" />
                </div> <br></br>
                <div className="swiper-slide">
                  <img src={michelin} className="img-fluid imageSize clientsImage " alt="" />
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
      </div>
    </>)

}

export default About;