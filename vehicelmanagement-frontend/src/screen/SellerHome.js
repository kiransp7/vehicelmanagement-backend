import React from "react";
import { useEffect, useContext } from "react";
import vmsContext from "../context/vmsContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ShowAppointmentSlots from "./ShowAppointmentSlots";

function SellerHome() {
  const context = useContext(vmsContext);
  const {
    singleGarageData,
    setSingleGarageData,
    bookingData,
    setBookingData,
    AppointmentDetails,
    setAppointementDetails,
  } = context;

  var useridfromsession = sessionStorage.getItem("userid");
  // console.log("one = " + useridfromsession);
  // console.log("two = " + singleGarageData.id);
  var idfromgarage = singleGarageData.id;
  // console.log("garageid   " + idfromgarage);

  function getSingleGarage() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get("http://localhost:8080/garage/showgarage/" + useridfromsession,options)
      .then((response) => {
        setSingleGarageData(response.data);
      });
  }


  function getBookingForRegisterGarage() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get("http://localhost:8080/garage/bookedslots/" + idfromgarage,options)
      .then((response) => {
        setBookingData(response.data);
      });
  }

  function getAppointmentSlot() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get("http://localhost:8080/garage/freeslots/" + idfromgarage,options)
      .then((response) => {
        setAppointementDetails(response.data);
      });
  }

  useEffect(() => {
    // toast.success('Login Successfully' , { autoClose: 1000 });
    getSingleGarage();
  }, []);

  useEffect(() => {
    getBookingForRegisterGarage();
    getAppointmentSlot();
  }, [singleGarageData]);

  // useEffect(() => {

  //   getAppointmentSlot();
  // }, [bookingData]);

  return (
    <>
      <div>
      <ToastContainer />
        
          <br></br>
          
          <Link to="/registerservice">
            <button style ={{marginLeft:"10px",height:"50px",width:"150px"}}className="btn btn-dark btn-lg ">
              <span className="nav-link">ADD SERVICE</span>
            </button>
          </Link>
          
       
          <Link to="/addappointment">
            <button style ={{ marginLeft:"1000px", height:"50px",width:"150px"}}className="btn btn-dark btn-lg float-right">
              <span className="nav-link">ADD APPOINTMENT</span>
            </button>
          </Link>
          
          <br></br>
          <br></br>
          <h1 style={{ marginLeft: "120px" }}>Upcoming Booking</h1>
          <div className=" table-responsive">
            <br></br>
            <br></br>
            <center>
              <table className="table table-bordered table-hover ">
                <thead className="thead-dark">
                  <tr className="bg-dark text-white ">
                    <th style={{textAlign:"center"}}scope="col"><h3>BookingId</h3></th>
                    <th style={{textAlign:"center"}} scope="col"><h3>FirstName</h3></th>
                    <th style={{textAlign:"center"}}scope="col"><h3>Contact</h3></th>
                    <th style={{textAlign:"center"}}scope="col"><h3>BookingStatus</h3></th>
                    <th style={{textAlign:"center"}}scope="col"><h3>BookingDate</h3></th>
                  </tr>
                </thead>

                <tbody>
                  {bookingData.map((booking) => {
                    return (
                      <tr style={{height:"50px"}}key={booking.id}>
                        <td style={{textAlign:"center"}}><h4>{booking.id}</h4></td>
                        <td style={{textAlign:"center"}}><h4>{booking.customer.firstname}</h4></td>
                        <td style={{textAlign:"center"}}><h4>{booking.customer.contact}</h4></td>
                        <td style={{textAlign:"center"}}><h4>{booking.bookingStatus}</h4></td>
                        <td style={{textAlign:"center"}}><h4>{booking.bookingDate}</h4></td>

                        {/* <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(garage.id) } }}>Delete</button></td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </center>
          </div>

          <br></br>
        </div>
        <div>
          <br></br>
          <br></br>
          <h1 style={{ marginLeft: "120px" }}>Vacant Slots</h1>
          <div className="container table-responsive">
            <br></br>
            <br></br>
            <center>
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr className="bg-dark text-white ">
                    <th style={{textAlign:"center"}} scope="col"><h3>GarageName</h3></th>
                    <th style={{textAlign:"center"}}scope="col"><h3>ServiceTime</h3></th>
                  </tr>
                </thead>

                <tbody>
                  {AppointmentDetails.map((appointment) => {
                    return (
                      <tr style={{height:"50px"}} key={appointment.id}>
                        
                        <td style={{textAlign:"center"}}><h4>{appointment.provider.garageName}</h4></td>
                        <td style={{textAlign:"center"}}><h4>{appointment.servicetime}</h4></td>
                        {/* <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(garage.id) } }}>Delete</button></td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </center>
          </div>
       
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default SellerHome;
