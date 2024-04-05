package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ServiceDao;
import com.app.dto.ServiceDTO;
import com.app.pojos.Services;

@Service
@Transactional
public class ServicesInterfaceImpl implements ServicesInterface {

	@Autowired
	private ServiceDao servicedao;

	@Override
	public ServiceDTO RegisterService(Services service) {
		Services registeredservice = servicedao.save(service);
//		ServiceDTO servicedto = new ServiceDTO(registeredservice.getServiceName(), registeredservice.getDescription(),
//				registeredservice.getCategory(),registeredservice.getImagePath());
//		return servicedto;
		return null;
	}

}
