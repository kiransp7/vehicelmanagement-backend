import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";
import axios from "axios";
import { useState } from "react";
import "./invoice.css"
import logo from "../images/logo.png"
//--------------------

//--------------------
function Invoice() {
  const componentRef = useRef();
  const context = useContext(vmsContext);

  const {
    invoice,
    selectedGarage,
    orderitems,
    setOrderItems,
    setInvoice,
  } = context;

  const [ isloading, setLoading ] =useState(true)
       


  const handleCheckout = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };

    axios.post(`http://localhost:8080/user/placeorder/${sessionStorage.getItem("userid")}/`,options)
      .then((response) => {
        setInvoice(response.data);
        setLoading(false);


      })
      .catch((err) => {
        console.log(err);
      });

    console.log("placeorder called")

  }







  useEffect(() => {
    handleCheckout()
  }, [])


const name=sessionStorage.getItem("name");
  

  const handlerPrint = () => {
    window.print();
  };

   if(isloading){
     return <div className="App"> Loading.....</div>
   }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-offset-3 vms-main">
            <div className="col-8">
              <div className="row">
                <div className="col-md-8">
                  <img className="img" alt="Invoce Template" style={{height:"30px",width:"120px"}} src={logo} />
                </div>
                <div className="col-md-8 text-right">
                  <br></br>
                  <h4 style={{ color: '#F81D2D' }}><strong>NAME:{name}</strong></h4> 
                </div>
              </div>
            
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2></h2>
                  <h5>Invoice No: {invoice.id}</h5>
                </div>
              </div>
              <br />
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th><h5>Description</h5></th>
                      <th><h5>Amount</h5></th>
                    </tr>
                  </thead>
                  <tbody>

                    {invoice.orderitems.map((item => {
                      console.log(item);
                      return (<> <tr>

                        <td className="col-md-9">{item.orderedservice.providedService.serviceName}</td>
                        <td className="col-md-3"><i className="fas fa-rupee-sign" area-hidden="true" />{item.orderedservice.amount} </td>
                      </tr>


                      </>)

                    }))}

                    <tr style={{ color: '#F81D2D' }}>
                      <td className="text-right"><h4><strong>Total:</strong></h4></td>
                      <td className="text-left"><h4><strong><i className="fas fa-rupee-sign" area-hidden="true" /> {invoice.totalAmount} </strong></h4></td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div>
                <div className="col-md-12">
                  <p><b>Date :</b> {invoice.createdOn}</p>
                  <br />
                 <button className="btn btn-success" onClick={handlerPrint}> PRINT </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );


}

export default Invoice;