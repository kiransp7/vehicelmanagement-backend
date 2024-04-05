import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import vmsContext from "../context/vmsContext";


function ShowAllUsers(){
    const context = useContext(vmsContext);
   
    const { allusers, setAllUsers } = context;

    function getCustomer() {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    };
    axios.get("http://localhost:8080/allcustomers",options).then((response) => {
      setAllUsers(response.data);
      console.log("got data "+response.data)
    });
  }

  useEffect(() => {
    getCustomer();
    
  }, []);


return(<>
<div className=" table-responsive">
        <br></br>
        <br></br>
        <center>
            <h2>CUSTOMER DATA</h2>
          <table className="table table-bordered table-hover ">
          <thead className="thead-dark">
              <tr className="bg-dark text-white ">
                
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>CUSTOMER NAME</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>EMAIL</h3>
                </th>
                
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>CONTACT</h3>
                </th>
                <th style={{ textAlign: "center" }} scope="col">
                  <h3>ROLE</h3>
                </th>
                
              </tr>
            </thead>

            <tbody>
              {allusers.map((user) => {
                if(user.role=="CUSTOMER"){
                return (
                  <tr style={{ height: "50px" }} key={user.id}>
                   
                    <td style={{ textAlign: "center" }}>
                      <h4>{user.firstName} {user.lastName}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{user.email}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{user.contact}</h4>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <h4>{user.role}</h4>
                    </td>
                    
                    
                  </tr>
                )};
              })}
            </tbody>
          </table>
        </center>
      </div>
</>)
}

export default ShowAllUsers;
