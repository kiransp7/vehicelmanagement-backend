import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import vmsContext from "../context/vmsContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminHome() {
  
  const context = useContext(vmsContext);
  const { garageData, setGarageData } = context;

  //  const [garageData, setGarageData] = useState([]);

  function getData() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get("http://localhost:8080/showallgarages",options)
      .then((response) => {
        setGarageData(response.data);
        // localStorage.setItem("garageid" ,JSON.stringify(response.data));
      });
  }

  // function getCustomer() {
  //   axios.get("http://localhost:8080/user/getallusers").then((response) => {
  //     setUserData(response.data);
  //   });
  // }

  function handleDelete(id) {
    console.log(id);
  
    // axios.delete(`https://localhost:8080/garage/removegarage/${id}`)
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .delete("http://localhost:8080/removegarage/" + id,options)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    // toast.success('Login Successfully' , { autoClose: 1000 });
    getData();
  }, []);

  return (
    <>
       <ToastContainer />
   
      <li className="addGarage" style={{ marginTop: "50px" }}>
        


        <Link to="/admin">
            <button style ={{marginLeft:"10px",height:"50px",width:"150px"}}className="btn btn-dark btn-lg ">
              <span className="nav-link">ADD GARAGE</span>
            </button>
          </Link>
          
       
          <Link to="/showallusers">
            <button style ={{ marginLeft:"1000px", height:"50px",width:"150px"}}className="btn btn-dark btn-lg float-right">
              <span className="nav-link">SHOW ALL USERS</span>
            </button>
          </Link>
      </li>
      <div className=" table-responsive">
        <br></br>
        <br></br>
        <center>
          <table className="table table-bordered table-hover ">
            <thead className="thead-dark">
              <tr className="bg-dark text-white ">
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>GarageID</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>GarageName</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>City</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>State</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>Pincode</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>Rating</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>DeleteAction</h3>
                </th>
              </tr>
            </thead>

            <tbody>
              {garageData.map((garage) => {
                return (
                  <tr style={{ height: "50px" }} key={garage.id}>
                    <td style={{ textAlign: "center" }}>
                      <h4>{garage.id}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{garage.garageName}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{garage.city}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{garage.state}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{garage.pincode}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{garage.rating}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        style={{ width: "90px", height: "30px" }}
                        className="btn btn-primary"
                        onClick={() => {
                          if (
                            window.confirm("Are You Sure To Delete Data ??")
                          ) {
                            handleDelete(garage.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default AdminHome;
