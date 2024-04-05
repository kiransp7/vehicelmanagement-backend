import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import vmsContext from "../context/vmsContext";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./cssforuserhome.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function UserHome() {
  const context = useContext(vmsContext);
  const history = useHistory();
  const { garageData, setGarageData } = context;

  var [searchText, setsearchText] = useState("");

  var [message, setMessage] = useState("");

  var Search = (args) => {
    setsearchText(args.target.value);
  }

  var Clear = () => {
    setsearchText("");
  }

  function getData() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .get("http://localhost:8080/user/showallgarages",options)
      .then((response) => {
        setGarageData(response.data);
      });
  }

  useEffect(() => {
    // toast.success('Login Successfully' , { autoClose: 1000 });
    getData();
  }, []);






  return (

    <div className="container" >
      <ToastContainer />

      <div style={{ float: "right", top: "70px", right: "0", position: "absolute", padding: "20px" }}>

        <div class="input-group">
          <input type="search" class="form-control rounded" value={searchText} onChange={Search} placeholder="Seach By City"  aria-label="Search" aria-describedby="search-addon" />
          <button type="button" onClick={Clear} className="btn btn-danger btn-lg">Clear</button>
        </div>



      </div>
      <table className="table responsive " >
        <br></br>
        <br></br>



        <tbody className="">
          {garageData.map((garage) => {
            if (garage.city.toLowerCase().includes
              (searchText.toLowerCase())) {
              return (<tr>
                <div className="row"  >
                  <td>
                    <Link to={`/categorylist/${garage.id}`} >
                      <div className="  py-5 hover">
                        <div class="home_item">
                          <div class="home_inner">

                            <h5 class="mt-0 mb-1"> <h1 syle={{ color: "black" }}><u>{garage.garageName}</u></h1></h5>
                            <br></br>    <h3>Rating:{garage.rating}</h3>
                            <h5 syle={{ color: "black" }}>
                              <br></br>
                              ADDRESS: {garage.address}
                              {"   "}
                              {garage.city}{" "}{" "}{","}{garage.state}
                            </h5>
                          </div>
                        </div>
                      </div>



                    </Link>
                  </td>
                  <hr></hr>
                </div>



              </tr>)

            }
          })}
        </tbody>
      </table>

    </div>
  );
}

export default UserHome;