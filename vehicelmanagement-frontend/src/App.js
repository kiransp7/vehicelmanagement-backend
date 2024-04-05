import "./app.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import {   Route, Switch } from "react-router-dom";
import SignUp from "./screen/SignUp";
import About from "./screen/About";
import Contact from "./screen/Contact";
import AdminAddGarage from "./screen/AdminAddGarage";
import AdminHome from "./screen/AdminHome";
import UserHome from "./screen/UserHome";
import SignIn from "./screen/SignIn";
import CommonState from "./context/CommonState";
import SellerHome from "./screen/SellerHome";

import Footer from "./screen/Footer";
import RegisterService from "./screen/RegisterService";
import CategoryList from "./screen/CategoryList";
import ServiceList from "./screen/ServiceList";
import Addappointment from "./screen/Addappointment";
import EditUser from "./screen/EditUser";
import ShowAllUsers from "./screen/ShowAllUsers";
import LandingHome from "./screen/LandingHome";
import Placeorder from "./screen/Placeorder";
import Invoice from "./screen/Invoice";
import ProtectedRoute from "./screen/ProtectedRoute";
import OrderHistory from "./screen/OrderHistory";
import SellerServices from "./screen/SellerServices";

function App() {
  return (
    <div>
      <CommonState>
     
      {/* <Header/> */}
        <Navbar />

        <Switch>
          <div>
            <Route path="/" exact component={LandingHome}/>
            <Route path="/userhome" exact component={UserHome} />
            <Route path="/adminhome" exact component={AdminHome} />
            {/* <ProtectedRoute path={'/adminhome'} exact component={AdminHome}></ProtectedRoute> */}
            <Route path="/seller" exact component={SellerHome} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/admin" exact component={AdminAddGarage} />
            <Route path="/registerservice" exact component={RegisterService}></Route>
            <Route path="/categorylist/:garageid" exact component ={CategoryList}/>
            <Route path="/servicelist/:category" exact component={ServiceList}/>  
            <Route path="/addappointment" exact component={Addappointment}></Route> 
            <Route path="/edituser" exact component={EditUser}></Route> 
            <Route path="/showallusers" exact component={ShowAllUsers}></Route>
            <Route path="/placeorder" exact component={Placeorder}></Route>
            <Route path="/invoice" exact component={Invoice}></Route>
            <Route path="/orderhistory" exact component={OrderHistory}/>
            <Route path="/services" exact component={SellerServices}/>
            
            
            
           
            {/* <Route path="/admin" component={ShowFeedbackScreen}/> */}
          </div>
        </Switch>
        <Footer/>
     
      </CommonState>
    </div>
  );
}



export default App;
