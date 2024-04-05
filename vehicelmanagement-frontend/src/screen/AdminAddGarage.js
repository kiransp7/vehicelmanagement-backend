import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../screen/signup.css";
import loginimage from "../images/login.jpg";
import axios from "axios";
import vmsContext from "../context/vmsContext";
import addservice from "../images/addservice.jpg";
import { Link } from "react-router-dom";
const AddGarageScreen = () => {
  const context = useContext(vmsContext);
  const {
    garageName,
    setGarageName,
    city,
    setCity,
    email,
    setEmail,
    state,
    setState,
    pincode,
    setPincode,
    rating,
    setRating,
    garageNameError,
    setGarageNameError,
    cityError,
    setCityError,
    emailError,
    setEmailError,
    pincodeError,
    setPincodeError,
    stateError,
    setStateError,
    ratingError,
    setRatingError,
    address,
    setAddress,
    addressError,
    setAddressEroor,
  } = context;

  const history = useHistory();
  const onAddGarage = () => {
    if (!garageName) setGarageNameError("Garage Name required!!!!!!");
    else setGarageNameError("");
    if (!city) setCityError("City Name required!!!!!!");
    else setCityError("");
    if (!email) setEmailError("Email required!!!!!!");
    else setEmailError("");
    if (!state) setStateError("State required!!!!!!");
    else setStateError("");
    if (pincode.length < 6)
      setPincodeError(" please enter validp incode!!!!!!");
    else setPincodeError("");
    if (garageName && city && state && pincode.length == 6 && rating && email) {
      console.log(pincode);
      history.push("/adminhome");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  };
    axios
      .post("http://localhost:8080/register/", {
        garageName,
        city,
        email,
        state,
        pincode,
        rating,
        address
      },options)
      .then(() => {
        history.push("/adminhome");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
     <div style={{ backgroundImage:`url(${addservice})`} }>
          
          <section className="vh-100 gradient-custom">
            <div className=" py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div
                    className="card shadow-2-strong card-registration"
                    style={{ borderradius: " 15px" }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        <center><u>ADD GARAGE</u></center>
                      </h3>
  
                      <form>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                            <input
                      onChange={(e) => {
                        setGarageName(e.target.value);
                      }}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter garage name"
                    />
                              <label className="form-label">
                                GARAGE NAME
                              </label>
                              <h6 className="text-danger text-center my-4">
                      {garageNameError}
                    </h6>
                            </div>
                          </div>
  
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                            <input
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter city name"
                    />
                              <label className="form-label">
                                CITY
                              </label>
                              <h6 className="text-danger text-center">{cityError}</h6>
                            </div>
                          </div>
                        </div>
  
                        <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                            <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                    />
                              <label className="form-label" >
                                EMAIL
                              </label>
                              <h6 className="text-danger text-center">{emailError}</h6>
                            </div>
                          </div>
                        </div>
                        
                          <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                               <input
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter state name"
                    />
                              <label className="form-label">
                                STATE
                              </label>
                              <h6 className="text-danger text-center">{stateError}</h6>
                            </div>
                          </div>
                        </div>
  
                        <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                             <input
                      onChange={(e) => {
                        setPincode(e.target.value);
                      }}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your pincode"
                    />
                              
                              <label className="form-label">
                                PINCODE
                              </label>
                              <h6 className="text-danger text-center">{pincodeError}</h6>
                            </div>
                          </div>
                        </div>
  
  
                        <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                             <input
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Enter rating"
                    />
                              
                              <label className="form-label">
                                RATING
                              </label>
                              <h6 className="text-danger text-center">{ratingError}</h6>
                            </div>
                          </div>
                        </div>
  
                        <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                            <input
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter garage address"
                    />
                              
                              <label className="form-label">
                                ADDRESS
                              </label>
                              <h6 className="text-danger text-center my-4"></h6>
                            </div>
                          </div>
                        </div>
  
                        
  
                        {/* <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <select className="select form-control-lg">
                              <option value="1" disabled>
                                Choose Category
                              </option>
                              <option value="WASHING">WASHING</option>
                              <option value="SERVICE">SERVICE</option>
                              <option value="DENTINGPAINTING">
                                DENTINGPAINTING
                              </option>
                              <option value="ACCESSORIES">ACCESSORIES</option>
                              <option value="CARSPA">CARSPA</option>
                              <option value="PERIODICSERVICE">
                                PERIODICSERVICE
                              </option>
                              <option value="AC">AC</option>
                              <option value="BATTERIES">BATTERIES</option>
                              <option value="LIGHTSANDFITMENTS">
                                LIGHTSANDFITMENTS
                              </option>
                            </select>
                            <label className="form-label select-label">
                              Choose Option
                            </label>
                          </div>
                        </div> */}
                       
                    
  
                        <div className="col-md-12 mb-4 pb-2">
                        <Link to="/adminhome">
                          <button className="btn btn-warning btn-lg">
                            <span className="nav-link">GO BACK</span>
                          </button>
                        </Link> {" "}
                            <button  onClick={handleSubmit}
                      type="submit"
                      value="Submit"   style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" ,float:"right"}} className="btn btn-warning btn-lg">
                              <span className="nav-link">REGISTER GARAGE</span>
                            </button>
                         
                          {"            "}
                        
                        
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  );
};

export default AddGarageScreen;





// import { useEffect, useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import "../screen/signup.css";
// import loginimage from "../images/login.jpg";
// import axios from "axios";
// import vmsContext from "../context/vmsContext";
// import addservice from "../images/addservice.jpg";
// import { Link } from "react-router-dom";
// const AddGarageScreen = () => {
//   const context = useContext(vmsContext);
//   const {
//     garageName,
//     setGarageName,
//     city,
//     setCity,
//     email,
//     setEmail,
//     state,
//     setState,
//     pincode,
//     setPincode,
//     rating,
//     setRating,
//     garageNameError,
//     setGarageNameError,
//     cityError,
//     setCityError,
//     emailError,
//     setEmailError,
//     pincodeError,
//     setPincodeError,
//     stateError,
//     setStateError,
//     ratingError,
//     setRatingError,
//     address,
//     setAddress,
//     addressError,
//     setAddressEroor,
//   } = context;

//   const history = useHistory();
  

//   const handleSubmit = (e) => {
//     if (!garageName) setGarageNameError("Garage Name required!!!!!!");
//     else setGarageNameError("");
//     if (!city) setCityError("City Name required!!!!!!");
//     else setCityError("");
//     if (!email) setEmailError("Email required!!!!!!");
//     else setEmailError("");
//     if (!state) setStateError("State required!!!!!!");
//     else setStateError("");
//     if (pincode.length < 6)
//       setPincodeError(" please enter validp incode!!!!!!");
//     else setPincodeError("");
//     if (!rating)
//     setRatingError(" please enter valid pincode!!!!!!");
//   else setRatingError("");
//    if (!address)
//     setAddressEroor(" please enter validp incode!!!!!!");
//   else setAddressEroor("");
   
//     e.preventDefault()
//     const options = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//       },
//   };
//     axios
//       .post("http://localhost:8080/register/", {
//         garageName,
//         city,
//         email,
//         state,
//         pincode,
//         rating,
//         address
//       },options)
//       .then(() => {
//         history.push("/adminhome");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//      <div style={{ backgroundImage:`url(${addservice})`} }>
          
//           <section className="vh-100 gradient-custom">
//             <div className=" py-5 h-100">
//               <div className="row justify-content-center align-items-center h-100">
//                 <div className="col-12 col-lg-9 col-xl-7">
//                   <div
//                     className="card shadow-2-strong card-registration"
//                     style={{ borderradius: " 15px" }}
//                   >
//                     <div className="card-body p-4 p-md-5">
//                       <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
//                         <center><u>ADD GARAGE</u></center>
//                       </h3>
  
//                       <form>
//                         <div className="row">
//                           <div className="col-md-12 mb-4">
//                             <div className="form-outline">
//                             <input
//                       onChange={(e) => {
//                         setGarageName(e.target.value);
//                       }}
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter garage name"
//                     />
//                               <label className="form-label">
//                                 GARAGE NAME
//                               </label>
//                               <h6 className="text-danger text-center my-4">
//                       {garageNameError}
//                     </h6>
//                             </div>
//                           </div>
  
//                           <div className="col-md-12 mb-4">
//                             <div className="form-outline">
//                             <input
//                       onChange={(e) => {
//                         setCity(e.target.value);
//                       }}
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter city name"
//                     />
//                               <label className="form-label">
//                                 CITY
//                               </label>
//                               <h6 className="text-danger text-center">{cityError}</h6>
//                             </div>
//                           </div>
//                         </div>
  
//                         <div className="row">
//                           <div className="col-md-12 mb-4 pb-2">
//                             <div className="form-outline">
//                             <input
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       type="email"
//                       className="form-control form-control-lg"
//                       placeholder="Enter your email"
//                     />
//                               <label className="form-label" >
//                                 EMAIL
//                               </label>
//                               <h6 className="text-danger text-center">{emailError}</h6>
//                             </div>
//                           </div>
//                         </div>
                        
//                           <div className="row">
//                           <div className="col-md-12 mb-4 pb-2">
//                             <div className="form-outline">
//                                <input
//                       onChange={(e) => {
//                         setState(e.target.value);
//                       }}
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter state name"
//                     />
//                               <label className="form-label">
//                                 STATE
//                               </label>
//                               <h6 className="text-danger text-center">{stateError}</h6>
//                             </div>
//                           </div>
//                         </div>
  
//                         <div className="row">
//                           <div className="col-md-12 mb-4 pb-2">
//                             <div className="form-outline">
//                              <input
//                       onChange={(e) => {
//                         setPincode(e.target.value);
//                       }}
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter your pincode"
//                     />
                              
//                               <label className="form-label">
//                                 PINCODE
//                               </label>
//                               <h6 className="text-danger text-center">{pincodeError}</h6>
//                             </div>
//                           </div>
//                         </div>
  
  
//                         <div className="row">
//                           <div className="col-md-12 mb-4 pb-2">
//                             <div className="form-outline">
//                              <input
//                       onChange={(e) => {
//                         setRating(e.target.value);
//                       }}
//                       type="number"
//                       className="form-control form-control-lg"
//                       placeholder="Enter rating"
//                     />
                              
//                               <label className="form-label">
//                                 RATING
//                               </label>
//                               <h6 className="text-danger text-center">{ratingError}</h6>
//                             </div>
//                           </div>
//                         </div>
  
//                         <div className="row">
//                           <div className="col-md-12 mb-4 pb-2">
//                             <div className="form-outline">
//                             <input
//                       onChange={(e) => {
//                         setAddress(e.target.value);
//                       }}
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter garage address"
//                     />
                              
//                               <label className="form-label">
//                                 ADDRESS
//                               </label>
//                               <h6 className="text-danger text-center my-4"></h6>
//                             </div>
//                           </div>
//                         </div>
  
  
//                         <div className="col-md-12 mb-4 pb-2">
//                         <Link to="/adminhome">
//                           <button className="btn btn-warning btn-lg">
//                             <span className="nav-link">GO BACK</span>
//                           </button>
//                         </Link> {" "}
//                             <button  onClick={handleSubmit}
//                       type="submit"
//                       value="Submit"   style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" ,float:"right"}} className="btn btn-warning btn-lg">
//                               <span className="nav-link">REGISTER GARAGE</span>
//                             </button>
                         
//                           {"            "}
                        
                        
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//     </>
//   );
// };

// export default AddGarageScreen;
