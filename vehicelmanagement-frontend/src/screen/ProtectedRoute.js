import { Route } from "react-router-dom";
import SignIn from "./SignIn";

function ProtectedRoute(props) {

 
  var isLoggedIn = false; //Code is yet to be written

  var isLoggedInFromSessionStorage = sessionStorage.getItem("isLoggedIn");
  if (isLoggedInFromSessionStorage != null) {
    if (isLoggedInFromSessionStorage == "true") {
      isLoggedIn = true;
    }
  }

  if (isLoggedIn) {
 
return <Route path={props.path} exact component={props.component} />;
  } else {
    return <SignIn></SignIn>;
  }
}

export default ProtectedRoute;
