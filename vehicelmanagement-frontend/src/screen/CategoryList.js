import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import vmsContext from "../context/vmsContext";
import "../screen/categorylist.css";
import "../screen/servicelist.css";
import loginimage from "../images/login.jpg";
import categorylistbg from "../images/categorylistbg.jpeg";
import "../screen/cart.css";
import Placeorder from "./Placeorder";
import serviceimage from "../images/serviceimage.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CategoryList() {
  const { garageid } = useParams();

  const context = useContext(vmsContext);

  const {
    selectedGarage,
    setSelectedGarage,
    categories,
    setCategories,
    category,
    setSelCategory,
    selcategory,
    services,
    setServices,
    selservice,
    setSelService,
    cart,
    setCart,
  } = context;

  console.log(garageid);

  function getCategoryList() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get("http://localhost:8080/user/showcategories/" + garageid,options)
      .then((response) => {
        setCategories(response.data);
      });
    setSelectedGarage(garageid);
  }

  function getServiceList() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get(
        `http://localhost:8080/user/showsallservices/${selectedGarage}/${sessionStorage.getItem(
          "CategoryId"
        )}`,options
      )
      .then((response) => {
        setServices(response.data);
      });
  }

  function getCart() {
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
        setCart(response.data);
      });
  }

  function addServicetoCart() {
    // toast.success('Service Added Succesfully' , { autoClose: 1000 });
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .post(
        `http://localhost:8080/user/addcartitem/${sessionStorage.getItem(
          "userid"
        )}/${selservice}`,options
      )
      .then((response) => {
        getCart();
        //showcartItems();
      });
  }

  
  const AddtoCart = (id) => {
    console.log(id);
    setSelService(`${id}`);
    console.log(`${selservice}`);
    addServicetoCart();
  };

  useEffect(() => {
    getServiceList();
    getCart();
  }, [selcategory]);

  useEffect(() => {
    getCategoryList();
  }, [selectedGarage]);


  useEffect(()=>{
    getCart();
  },[])

  const handleSelect = (cat) => {
    console.log(cat);
    sessionStorage.setItem("CategoryId", cat);
    setSelCategory(cat);
  };

  return (
    <>
      <div className="movement">
        <img className="screencatimage" src={categorylistbg} alt="" />
      </div>
      <br></br>

      <div className="container ">
        {categories.map((cat) => {
          return (
            <div
              onClick={() => {
                handleSelect(cat);
              }}
            >
              <div className="card_item" key={cat}>
                <div className="card_inner">
                  <img src={loginimage} alt="" />

                  <div className="userName">{cat}</div>
                </div>
              </div>
            </div>
          );
        })}

        <hr></hr>
        <br></br>
        <br></br>
      </div>
      <hr></hr>
      <br></br>
      <div style={{float:"right",bottom:"10px",right:"0",position:"fixed",padding:"20px"}} >
     
            <div className="" >
            <div className="card bg-c-blue order-card">
                <div className="card-block" style={{backgroundColor:"#002D62",borderRadius:"10px"}}>
                    <h3 className="m-b-20">Cart </h3>
                    <h2 className="text-right"><i class="fa fa-cart-plus f-left"></i><span></span></h2>
                    <p className="m-b-0"> <h4>Items:{cart.totalItems}</h4><span className="f-center"><h3> </h3></span></p>
                    <h4>Cart Value :{cart.totalCartPrice}</h4>
                    <Link to={"/placeorder"}>
                    <button className="btn btn-warning"><h3>Place Order</h3> </button>
                    </Link>
                </div>
            </div>
        </div>

            </div>
            

      <div className="container">
     <table >
      <tbody>
           
        
      {services.map((service) => {
        return (
          <tr>
          <td className="">   
  
        <div className=" "style={{height:"180px"}} key={service.id}>
<div className="col-md-8" style={{marginRight:"790px"}}>
<div className="row p-2 bg-white border rounded">
  <div className="col-md-3 mt-1"> <img className="screencatimage" src={serviceimage} alt="daloplease" /></div>
  <div className="col-md-6 mt-1">
    <h1><b>{service.providedService.serviceName}</b></h1>
    <div className="d-flex flex-row">
      <div className="ratings mr-2"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div><span>310</span>
    </div>
    <div className="mt-1 mb-1 spec-1"></div>
    <p className="text-justify text-truncate para mb-0">{service.providedService.description}<br /><br /></p>
  </div>
  <div className="align-items-center align-content-center col-md-3 border-left mt-1">
    <div className="d-flex flex-row align-items-center">
      <h4 className="mr-1">Rs {service.amount}</h4>
  
    </div>
   
    <h6 className="text-success">{service.providedService.category}</h6>
   
    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm"  onClick={() => {
                    AddtoCart(service.id);
                  }}
                >AddtoCart</button>
               
                </div>
  </div>
</div>
</div>
</div>
</td>
      </tr>   );
      })}
    
    

      </tbody>
     </table>
     </div>


<br></br>
<br></br>
<br></br>
   
    </>
  );
}

export default CategoryList;