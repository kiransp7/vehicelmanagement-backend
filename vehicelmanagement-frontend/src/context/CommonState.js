import vmsContext from "./vmsContext";
import { useState } from "react";

const CommonState = (props) => {
  //Garage Adding State
  const [garageName, setGarageName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [rating, setRating] = useState("");
  const [address,setAddress]=useState("");
  
  const [garageNameError, setGarageNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [stateError, setStateError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [addressError, setAddressError] = useState("");

  //getting data from garages
  const [garageData, setGarageData] = useState([]);

  //bookings data
  const [bookingData, setBookingData] = useState([]);

  //single garage data
  const [singleGarageData, setSingleGarageData] = useState([]);

  //appointments details

  const [AppointmentDetails, setAppointementDetails] = useState([]);

  const [categories, setCategories] = useState([]);

  const [services, setServices] = useState([]);

  const [selectedGarage, setSelectedGarage] = useState("");

  const [selcategory, setSelCategory] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const [cart, setCart] = useState("");

  const [selservice, setSelService] = useState("");

  const [afterdeleteCart,setAfterDeleteCart] = useState("");

  const [selectedSlot , setSelectedSlot] = useState("");

  //adding service details service

  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [garageid, setGarageId] = useState("");

  //  addd appointment slots
  const [servicetime ,setServiceTime] =useState(""); 

  //user details
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [encPassword, setEncPassword] = useState("");
  const [ password , setPassword ] = useState("");
  
  
  const [contact, setContact] = useState("");
  
  const [allusers,setAllUsers] = useState([]);

  const [invoice,setInvoice] = useState("");

  const[ user ,setUser ] = useState([]); 

   const [lockedGarage,setLockedGarage] =useState("");
   const [ orderhistory, setOrderhistory ] = useState([]);

   const [ sellerservice, setSellerService ] = useState([]);


  return (
    <vmsContext.Provider
      value={{
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
        address,
        setAddress,
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
        addressError,
        setAddressError,

        //getting garage data list
        garageData,
        setGarageData,

        // booking state
        bookingData,
        setBookingData,

        //Selller single garage
        singleGarageData,
        setSingleGarageData,

        //show avalability slots
        AppointmentDetails,
        setAppointementDetails,

        // adding service details
        serviceName,
        setServiceName,
        description,
        setDescription,
        imagePath,
        setImagePath,
        category,
        setCategory,
        amount,
        setAmount,
        garageid,
        setGarageId,

        /// user bhaiya ka he
        categories,
        setCategories,
        selectedGarage,
        setSelectedGarage,
        services,
        setServices,
        selcategory,
        setSelCategory,
        cart,
        setCart,
        cartItems,
        setCartItems,
        selservice,
        setSelService,
        afterdeleteCart,
        setAfterDeleteCart,

        // add appointment slots
        servicetime,
        setServiceTime,
        selectedSlot,
        setSelectedSlot,
        invoice,
        setInvoice,

        //signup
        firstname,
        setFirstName,
        lastname,
        setLastName,
        password,
        setPassword,
        encPassword,
        setEncPassword,
        contact,
        setContact,

      //getting all usersdata
        allusers,
        setAllUsers,
        
        //get users 
        user,
        setUser,
        lockedGarage,
        setLockedGarage,

        //get response


        //order history
        orderhistory, 
        setOrderhistory,
       

       //seller services
       sellerservice,
       setSellerService      
  
        





      }}
    >
      {props.children}
    </vmsContext.Provider>
  );
};

export default CommonState;
