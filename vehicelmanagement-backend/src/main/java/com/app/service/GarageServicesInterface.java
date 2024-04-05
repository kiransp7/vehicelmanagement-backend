package com.app.service;

import java.util.List;

import com.app.dto.ServiceDTO;
import com.app.pojos.Category;
import com.app.pojos.GarageService;

public interface GarageServicesInterface {



	List<GarageService> allMappedServicesWithCategory(long garageid, Category category);

	String removeServiceFromGarage(long garageid, long  serviceid);
	
	String addservicewithGarage(ServiceDTO servicedto);

}
