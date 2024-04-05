package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingURLDTO;
import com.app.service.BookingInterface;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingInterface bookinginterface;
	
	
	@PostMapping("/confirm")
	public ResponseEntity<?> confirmBooking(@RequestBody BookingURLDTO details) {
		try {
              System.out.println("booking details" + details.getCustomerID() + details.getAppoinmentID());
			return new ResponseEntity<>(bookinginterface.confirmBooking(details.getAppoinmentID(),details.getCustomerID()),HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in booking appointment");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@DeleteMapping("/deletebooking/{bookingid}")
	public ResponseEntity<?> deleteBooking(@PathVariable long bookingid) {
		try {

			return new ResponseEntity<>(bookinginterface.cancelbooking(bookingid),HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in cancelling appointment");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
