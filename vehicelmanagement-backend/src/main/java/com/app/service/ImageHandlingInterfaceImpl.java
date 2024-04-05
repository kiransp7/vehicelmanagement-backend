package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exception.ResourceNotFoundException;

import com.app.dao.ServiceDao;
import com.app.dto.ServiceDTO;
import com.app.pojos.Services;


@Service
@Transactional

public class ImageHandlingInterfaceImpl implements ImageHandlingInterface {

	@Autowired 
	private ServiceDao servicedao;
	
	@Value("${file.upload.location}")
	private String folderLocation;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ServiceDTO saveImage(long serviceid, MultipartFile imageFile) throws IOException {
	Services service = servicedao.findById(serviceid).orElseThrow(()-> new ResourceNotFoundException("cant find the service"));
	String path= folderLocation + File.separator + imageFile.getOriginalFilename();
	service.setImagePath(path);
	Files.copy(imageFile.getInputStream(), Paths.get(path), StandardCopyOption.REPLACE_EXISTING);
		return mapper.map(service, ServiceDTO.class);
	}
	
	
	

}
