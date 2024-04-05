package com.app.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.pojos.Category;
import com.app.pojos.User;
import com.app.service.CartItemInterface;
import com.app.service.GarageInterface;
import com.app.service.GarageServicesInterface;
import com.app.service.OrderInterface;
import com.app.service.UserServiceInterface;

@CrossOrigin(origins ="*" , allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController{

	@Autowired
	private UserServiceInterface userService;
	@Autowired
	private CartItemInterface cartItemif;
	@Autowired
	private OrderInterface orderinterface;
	@Autowired
	public GarageInterface garageservice;
	
	@Autowired
	private GarageServicesInterface garageserviceinterface;

	@PostMapping("/addcartitem/{userid}/{garageserviceid}")
	public ResponseEntity<?> addCartItemToCart(@PathVariable long userid, @PathVariable long garageserviceid) {
		System.out.println("INSIDE THE ADD CART ITEM IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(cartItemif.addcartItemToCart(userid, garageserviceid), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("Error in Adding CartItem");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/showcartitem/{userid}")
	public ResponseEntity<?> showAllCartItems(@PathVariable long userid) {
		System.out.println("INSIDE THE SHOW CART ITEM IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(cartItemif.showAllCartItemsOfCart(userid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("Error in getting cartItems");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/showcart/{userid}")
	public ResponseEntity<?> showCart(@PathVariable long userid) {
		System.out.println("INSIDE THE SHOW CART  IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(userService.showCart(userid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("Error in getting cartItems");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping("/placeorder/{userid}")
	public ResponseEntity<?> placeOrder(@PathVariable long userid) {
		System.out.println("INSIDE THE PLACE ORDER IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(orderinterface.createOrder(userid), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("Error in Placing Order");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@DeleteMapping("/removecartitem/{userid}/{garageserviceid}")
	public ResponseEntity<?> removeCartItemFromCart(@PathVariable long userid, @PathVariable long garageserviceid) {
		System.out.println("INSIDE THE REMOVE CART ITEM IN USER CONTROLLER" + userid +"" + garageserviceid);
		try {
			return new ResponseEntity<>(cartItemif.removeCartItemFromCart(userid, garageserviceid), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("Error in Removing CartItem");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/updateprofile/{userid}")
	public ResponseEntity<?> updateUserProfile(@PathVariable long userid, @RequestBody User user) {
		System.out.println("INSIDE THE USER UPDATE PROFILE IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(userService.updateProfile( user,userid), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("Error in Updating Profile");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/vieworderhistory/{userid}")
	public ResponseEntity<?> viewUserOrders(@PathVariable long userid) {
		System.out.println("INSIDE THE VIEW ORDERS IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(orderinterface.viewOrders(userid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("Error in Updating Profile");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/orderdetailbyorderid/{orderid}")
	public ResponseEntity<?> viewOrderDetails(@PathVariable long orderid) {
		System.out.println("INSIDE THE VIEW ORDERS IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(orderinterface.viewOrderDetails(orderid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("Error in Fetching Order Details");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getuser/{userid}")
	public ResponseEntity<?> viewuserDetails(@PathVariable long userid) {
		System.out.println("INSIDE THE VIEW ORDERS IN USER CONTROLLER");
		try {
			return new ResponseEntity<>(userService.viewuserDetails(userid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("Error in Fetching Order Details");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/showallgarages")
	public ResponseEntity<?> getAllGarages() {

		try {

			return new ResponseEntity<>(garageservice.getAllGarages(), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all GARGES");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping("/showcategories/{garageid}")
	public ResponseEntity<?> getAllCatrgoriesOfGarage(@PathVariable long garageid) {

		try {

			return new ResponseEntity<>(garageservice.getGarageServiceCategory(garageid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all GARGES");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping("/showsallservices/{garageid}/{category}")
	public ResponseEntity<?> getAllServicesByCategory(@PathVariable long garageid, @PathVariable Category category) {
		try {
			System.out.println("inside show by ctgry "+garageid+"  "+category);
                // System.out.println("get garagedto details" + categorydto.getCategory() + " " + categorydto.getGarageId());
			return new ResponseEntity<>(garageserviceinterface.allMappedServicesWithCategory(garageid , category),
					HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all services BY Category");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping("/freeslots/{garageid}")
	public ResponseEntity<?> showAllappointments(@PathVariable long garageid) {
		try {
System.out.println("inside calling appointments /garage/freeslots");
			return new ResponseEntity<>(garageservice.showAllappointments(garageid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all services BY Category");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}
