
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";

function Placeorder() {
  const context = useContext(vmsContext);

  const history = useHistory();

  const {
    selectedGarage,
    cartItems,
    setCartItems,
    cart,
    setCart,
    invoice,
    AppointmentDetails,
    setAppointementDetails,
    afterdeleteCart,
    setAfterDeleteCart,
    selectedSlot,
    setSelectedSlot,
    setInvoice,


  } = context;

  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(true);
  const customerID = sessionStorage.getItem("userid");

  const appoinmentID = JSON.stringify(selectedSlot)
  const onClickBtn1 = () => {
    // your other codes when btn 1 is clicked
    // 
    console.log(customerID)
    console.log(selectedSlot)
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios.post("http://localhost:8080/booking/confirm/", {
      customerID,
      appoinmentID,
    },options)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });

    setBool2(false); //disable button 2
    setBool1(true)

  }



  function showcartItems() {
    console.log(cartItems)
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get(
        `http://localhost:8080/user/showcartitem/${sessionStorage.getItem(
          "userid"
        )}`,options
      )
      .then((response) => {
        setCartItems(response.data);
        console.log("showcartitem get called" + response.data)
        console.log(response)
      });
  }


  function getCart() {
    console.log(cart)
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get(
        `http://localhost:8080/user/showcart/${sessionStorage.getItem(
          "userid"
        )}`,options
      )
      .then((response) => {
        setAfterDeleteCart(response.data);

        console.log(afterdeleteCart)

        console.log("get cart called")
      });
  }

  useEffect(() => {


    showcartItems();
    showappointments();
    getCart();
    console.log("method is called");
    // console.log(selectedGarage)
  }, []);


  // useEffect(() => {
  //  // getCart();
  // }, [cartItems])


  function showappointments() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios.get(`http://localhost:8080/user/freeslots/${selectedGarage}`,options)
      .then((response) => {
        setAppointementDetails(response.data);
        console.log(response.data)
        // console.log("method called show appointments for garge " + selectedGarage);
      })
  }

  const removeItem = (id) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios.delete(`http://localhost:8080/user/removecartitem/${sessionStorage.getItem("userid")}/` + id,options)
      .then(() => {

        showcartItems();
        getCart();

      })
      .catch((err) => {
        console.log(err);
      });

    console.log("removeitem called")

  }



  const handleBook = (appid) => {
    setSelectedSlot(appid)
    console.log(selectedSlot);
  }



  return (<>
   
    <div>
      <section className="h-100 h-custom" style={{ backgroundcolor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">

                  <div className="row">

                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i
                        className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                      <hr></hr>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1"><h3>Shopping cart</h3></p>
                          <p className="mb-0"><h4>You have {afterdeleteCart.totalItems} items in your cart</h4></p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                            className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>

                      {cartItems.map((item) => {
                        return (
                          <div className="ui four column" key={item.id}>
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="d-flex justify-content-left">
                                  <div className="d-flex flex-row align-items-center">
                                    {/* <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                        </div> */}
                                    <div className="ms-3">
                                      <h5><b>{item.selectedService.providedService.serviceName}</b></h5>

                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">

                                    <div style={{ width: "80px" }}>
                                      <h5 className="mb-0"><b>{item.selectedService.amount}</b></h5>


                                    </div>

                                    <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                                  </div>
                                  {/* <div className="d-flex flex-row align-items-center">

                                    <div style={{ width: "20px" }}>
                                      <span id="boot-icon" className="bi bi-trash" style={{ fontSize: '20px', color: 'rgb(255, 0, 0)', opacity: '0.8', WebkitTextStrokeWidth: '0px' }} onClick={() => { removeItem(item.selectedService.id) }} />

                                    </div>

                                    <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                                  </div> */}
                                  <div className="d-flex flex-row align-items-left">

                                    <div style={{ width: "80px" }}>

                                    </div>

                                    <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                        );
                      })};






                    </div>
                    <div className="col-lg-5" >

                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">CHOOSE APPOINTMENT SLOT</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                          </div>




                          <div className="form-outline form-white   mb-4">

                            {AppointmentDetails.map((app) => {
                              return (<>

                                <div className="d-flex justify-content-left">

                                  <input type="radio" name="bookslot" value={app.id} onChange={() => { handleBook(app.id) }} /><h4>{"   "}</h4><h4>{app.servicetime}</h4>
                                  <br></br>

                                </div>
                              </>
                              )
                            })
                            }

                          </div>

                          <button type="button" className="btn btn-warning btn-block btn-lg" onClick={onClickBtn1} disabled={bool1} >
                            <div className="">

                              <span><b>BOOK SLOT</b> <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>

                          <hr className="my-4"></hr>


                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2"><h3>{afterdeleteCart.totalCartPrice}</h3></p>
                          </div>
                           <Link to="/invoice">
                          <button type="button" className="btn btn-warning btn-block btn-lg" disabled={bool2} >
                            <div className=" justify-content-between">
                              <span><b>  CHECKOUT </b><i className="fas fa-long-arrow-alt-right ms-2" ></i></span>
                            </div>
                          </button>
                          </Link>

                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </>)


}

export default Placeorder;