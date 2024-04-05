package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDTO;
import com.app.dto.ServiceDTO;
import com.app.pojos.Category;
import com.app.service.AppointmentInterface;
import com.app.service.GarageInterface;
import com.app.service.GarageServicesInterface;;

@CrossOrigin
@RestController
@RequestMapping("/garage")
public class GarageController {

	@Autowired
	public GarageInterface garageservice;

	@Autowired
	private GarageServicesInterface garageserviceinterface;

	@Autowired
	private AppointmentInterface appointmentinterface;


//	@PostMapping("/mapService/{garageid}/{serviceid}/{amount}")
//	public ResponseEntity<?> mapServiceWithGarage(@PathVariable long garageid, @PathVariable long serviceid,
//			@PathVariable double amount) {
//		try {
//
//			return new ResponseEntity<>(garageserviceinterface.mapServiceToGarage(garageid, serviceid, amount),
//					HttpStatus.CREATED);
//		} catch (RuntimeException e) {
//			System.out.println("error in mapping service");
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//
//	}
	
	
	@PostMapping("/addserviceingarage")
	public ResponseEntity<?> addservicetoGarage(@RequestBody ServiceDTO transientService) {

		System.out.println("In add garage " + transientService);
		try {

			return new ResponseEntity<>(garageserviceinterface.addservicewithGarage(transientService), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("error in garage registration");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/slot")
	public ResponseEntity<?> mapServiceSlotsWithGarage(@RequestBody AppointmentDTO appointmentdto) {
		try {

			return new ResponseEntity<>(
					appointmentinterface.addAppointment(appointmentdto.getGarageId(), appointmentdto.getServicetime()),
					HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("error in mapping service slots");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/showsallservices/{garageid}")
	public ResponseEntity<?> getAllServices(@PathVariable long garageid) {

		try {

			return new ResponseEntity<>(garageservice.allMappedServices(garageid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all services");
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

	@DeleteMapping("/removeService/{garageid}/{serviceid}")
	public ResponseEntity<?> removeServiceFromeGarage(@PathVariable long garageid, @PathVariable long serviceid) {
		try {

			return new ResponseEntity<>(garageserviceinterface.removeServiceFromGarage(garageid, serviceid),
					HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in mapping service");
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

	@GetMapping("/bookedslots/{garageid}")
	public ResponseEntity<?> showAllBookedAppointments(@PathVariable long garageid) {
		System.out.println("in booked slots of garage");
		try {

			return new ResponseEntity<>(garageservice.showAllBookedappointments(garageid), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("error in getting all services BY Category");
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
	
	
	@GetMapping("/showgarage/{userid}")
	public ResponseEntity<?> getGarageByUserID(@PathVariable long userid) {
		System.out.println("In garage " + userid);
		try {

			return new ResponseEntity<>(garageservice.getGarageByUserID(userid), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("error in garage Delete");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	

}
