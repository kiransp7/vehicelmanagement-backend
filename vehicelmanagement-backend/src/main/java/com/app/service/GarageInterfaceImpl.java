package com.app.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.GarageAlreadyExist;
import com.app.custom_exception.ResourceNotFoundException;
import com.app.custom_exception.UserNotFoundException;
import com.app.dao.AppointmentDao;
import com.app.dao.BookingDao;
import com.app.dao.GarageDao;
import com.app.dao.GarageServicesDao;
import com.app.dao.UserDao;
import com.app.dto.GarageDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Bookings;
import com.app.pojos.Category;
import com.app.pojos.Garage;
import com.app.pojos.GarageService;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class GarageInterfaceImpl implements GarageInterface {

	@Autowired
	public GarageDao garagedao;

	@Autowired
	public UserDao userdao;
	@Autowired
	private GarageServicesDao gsdao;

	@Autowired
	public AppointmentDao appointmentdao;

	@Autowired
	public BookingDao bookingdao;

	@Override
	public GarageDTO addGarageWithUser(GarageDTO garagedto) {

		System.out.println(garagedto.toString());		
		
		String email = garagedto.getEmail();
		
		User userByEmail = userdao.findByEmail(email);

		Garage garage = new Garage();
	       garage.setGarageName(garagedto.getGarageName());
		   garage.setCity(garagedto.getCity());
		   garage.setState(garagedto.getState());
		   garage.setPincode(garagedto.getPincode());
		   garage.setRating(garagedto.getRating());
           garage.setAddress(garagedto.getAddress());
           garage.setGarageOwner(userByEmail);
           System.out.println(garage.toString());
		
		  Garage existingGarage = garagedao.getGarageByUserID(userByEmail.getId());
          
		if (existingGarage == null) {
			  garage.setGarageOwner(userByEmail);
			  userByEmail.setRole(Role.SELLER);
			  userdao.save(userByEmail);
		      Garage registerGarage = garagedao.save(garage);
			System.out.println(" Garage registration successfull ");
			GarageDTO gdto = new GarageDTO(registerGarage.getGarageName(), registerGarage.getCity(),
					registerGarage.getState(), registerGarage.getPincode(), garage.getRating(),
					registerGarage.getAddress(),registerGarage.getGarageOwner());

			return gdto;
		}

		else {
			throw new GarageAlreadyExist("Garage already registered with the mail ");
		}
	}

		
	@Override
	public List<GarageService> allMappedServices(long garageid) {

		Garage garage = garagedao.findById(garageid)
				.orElseThrow(() -> new ResourceNotFoundException("invalid garage id"));

		if (garage != null) {

			List<GarageService> allservices = garage.getServices();

			System.out.println("all services for garage" + allservices);

			return allservices;
		} else {
			return null;
		}
	}

	@Override
	public List<Appointment> showAllappointments(long garageid) {

		List<Appointment> allslots = appointmentdao.showAllAppointments(garageid);

		return allslots;
	}

	@Override
	public List<Bookings> showAllBookedappointments(long garageid) {

		List<Bookings> allbookings = bookingdao.findAll();

		List<Bookings> myBookings = allbookings.stream()
				.filter(b -> b.getAppoinment().getProvider().getId() == garageid).collect(Collectors.toList());

		return myBookings;
	}

	@Override
	public String RemoveGarage(long id) {
		Garage garage = garagedao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Garage Not Found"));
		garage.setGarageStatus(false);
		garagedao.saveAndFlush(garage);
		User user = garage.getGarageOwner();
		user.setRole(Role.CUSTOMER);
		userdao.saveAndFlush(user);

		return "Successfully Removed";
	}

	@Override
	public List<Garage> getAllGarages() {
		List<Garage> garagelist = garagedao.getAllGarages();
		return garagelist;
	}

	@Override
	public List<GarageService> getAllGarageServices(long id) {

		List<GarageService> list = gsdao.getAllServicecByGarageId(id);
		return list;
	}

	@Override
	public Set<Category> getGarageServiceCategory(long garageid) {
		Set<Category> ctglist = gsdao.getAllServicecByGarageId(garageid)
				.stream()
				.map(s->s.getProvidedService().getCategory()).collect(Collectors.toSet());
		
		return ctglist;
	}
	
	@Override
	public Garage getGarageByUserID(long userid) {
		
		//User user = userdao.findById(userid).orElseThrow(()->new ResourceNotFoundException("Garage Not Found"));
		Garage garage = garagedao.getGarageByUserID(userid);
		return garage;
	}

}
