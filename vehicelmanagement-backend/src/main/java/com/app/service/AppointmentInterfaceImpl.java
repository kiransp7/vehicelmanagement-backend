package com.app.service;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.AppointmentDao;
import com.app.dao.GarageDao;
import com.app.pojos.Appointment;
import com.app.pojos.Garage;


@Service
@Transactional
public class AppointmentInterfaceImpl implements AppointmentInterface {

	@Autowired
	public AppointmentDao appointmentdao;
	
	@Autowired
	private GarageDao garagedao;
	
	

	@Override
	public String addAppointment(long garageid, Date servicetime) {
		 
	Garage garage =	garagedao.findById(garageid).orElseThrow(()-> new ResourceNotFoundException("garage not found"));
		
		Appointment appointment = new Appointment(servicetime,true);
		
		garage.addAppointments(appointment);
		
		return "Service slot added succesfully";
	}
	
	public Appointment getAppointment(long appointmentId)
	{
		Appointment appointment = appointmentdao.findById(appointmentId).orElseThrow(()->new ResourceNotFoundException("Invalid appointment ID"));
	   
		return appointment;
	    
	}

}
