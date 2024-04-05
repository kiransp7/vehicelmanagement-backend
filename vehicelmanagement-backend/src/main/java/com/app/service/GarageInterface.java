package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.dto.GarageDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Bookings;
import com.app.pojos.Category;
import com.app.pojos.Garage;
import com.app.pojos.GarageService;

public interface GarageInterface {

	List<GarageService> allMappedServices(long garageid);

	List<Appointment> showAllappointments(long garageid);

	List<Bookings> showAllBookedappointments(long garageid);

	GarageDTO addGarageWithUser(GarageDTO garagedto);

	List<Garage> getAllGarages();

	String RemoveGarage(long id);

	List<GarageService> getAllGarageServices(long id);

	Set<Category> getGarageServiceCategory(long garageid);
	
	Garage getGarageByUserID(long userid);

}
