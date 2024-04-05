package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.GarageDao;
import com.app.dao.GarageServicesDao;
import com.app.dao.ServiceDao;
import com.app.dto.ServiceDTO;
import com.app.pojos.Category;
import com.app.pojos.Garage;
import com.app.pojos.GarageService;
import com.app.pojos.Services;

@Service
@Transactional
public class GarageServiceInterfaceImpl implements GarageServicesInterface {

	@Autowired
	private GarageDao garagedao;

	@Autowired
	private ServiceDao servicedao;

	@Autowired
	private GarageServicesDao garageservicedao;


	
	@Override
	public String addservicewithGarage(ServiceDTO servicedto) {
		
		     Services service = new Services();
		     
		     service.setServiceName(servicedto.getServiceName());
		     service.setCategory(servicedto.getCategory());
		     service.setDescription(servicedto.getDescription());
		     service.setImagePath(servicedto.getImagePath());
		     long garageid= servicedto.getGarageid();
		     double amount = servicedto.getAmount();
		     
		     Garage garage = garagedao.findById(garageid)
						.orElseThrow(() -> new ResourceNotFoundException("Invalid garage id"));
		     
		     Services savedservice = servicedao.saveAndFlush(service);
		
		     if (garage != null && service != null) {

					GarageService mappedservices = new GarageService(amount);
					mappedservices.setProvidedService(service);
					garage.addService(mappedservices);

					return "Service added successfully";

				}
		     
		     else
		     return "Service not added succesfully";
		     
		
	}

	@Override
	public List<GarageService> allMappedServicesWithCategory(long garageid, Category category) {
		
//		long garageid = catdto.getGarageId();
//		Category category = catdto.getCategory();
		
		System.out.println(garageid + " " +category);
		
		List<GarageService> listofservices = garageservicedao.getAllServicesByCategoryName(garageid, category);
		System.out.println(listofservices.toString());
		return listofservices;
	}

	@Override
	public String removeServiceFromGarage(long garageid, long serviceid) {

		GarageService garageservice = garageservicedao.removeServiceFromGarage(garageid, serviceid);

		System.out.println(garageservice);
		
		 Garage garage = garagedao.findById(garageid).orElseThrow(()->new ResourceNotFoundException("invalid garageid"));
		  
		 garage.removeService(garageservice);
		 
		 garagedao.saveAndFlush(garage);
		 
		 return "service deleted successfully";
		

	}
}
