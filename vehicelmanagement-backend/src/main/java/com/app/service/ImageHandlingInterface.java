package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ServiceDTO;

public interface ImageHandlingInterface {

	 ServiceDTO saveImage(long serviceid, MultipartFile imageFile) throws IOException;
	 
	 
	
}
