package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GarageDTO;
import com.app.dto.LoginDTO;
import com.app.dto.ResponseDto;
import com.app.pojos.User;
import com.app.service.GarageInterface;
import com.app.service.UserServiceInterface;

@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private UserServiceInterface userService;
	
	@Autowired
	public GarageInterface garageservice;
	
	@PostMapping("/signup")
	public ResponseEntity<?> addUserDetails(@RequestBody @Valid User transientUser) {
		System.out.println("In add user " + transientUser);
		try {
			return new ResponseEntity<>(userService.registerUser(transientUser), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("Error in register user");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO loginDto) {
		System.out.println("inside authenticate user of user Controller" + loginDto.getEmail() + loginDto.getPassword());
		User user = userService.getUser(loginDto.getEmail(), loginDto.getPassword());
		try {
		return new ResponseEntity<>(new ResponseDto<>("success", user), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("Error in LogIn");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerGarage(@RequestBody GarageDTO transientGarage) {

		System.out.println("In add garage " + transientGarage );
		try {

			
			
			return new ResponseEntity<>(garageservice.addGarageWithUser(transientGarage), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("error in garage registration");
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
	
	@GetMapping("/allcustomers")
	public ResponseEntity<?> getAllCustomers() {

		try {

			return new ResponseEntity<>(userService.showAllUsers(), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all Customers");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@DeleteMapping("/removegarage/{id}")
	public ResponseEntity<?> removeGarage(@PathVariable long id) {

		System.out.println("In add garage " +id );
		try {

			
			
			return new ResponseEntity<>(garageservice.RemoveGarage(id), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("error in garage Delete");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
