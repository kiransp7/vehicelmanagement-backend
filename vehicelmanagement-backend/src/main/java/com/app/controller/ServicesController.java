package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Services;
import com.app.service.ImageHandlingInterface;
import com.app.service.ServicesInterface;

@CrossOrigin
@RestController
@RequestMapping("/service")
public class ServicesController {

	@Autowired
	private ServicesInterface serviceif;
	@Autowired
	private ImageHandlingInterface imageservice;

	@PostMapping("/addservice")
	public ResponseEntity<?> AddServices(@RequestBody Services transientservice) {
		System.out.println("In add service " + transientservice);
		try {
			return new ResponseEntity<>(serviceif.RegisterService(transientservice), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			System.out.println("error in register service");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping(value="/{serviceId}/serviceimages",consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable long serviceId, @RequestParam("serviceimages") MultipartFile imgFile)
			throws IOException {
		System.out.println("emp id " + serviceId);
		System.out.println("uploaded file name :  " + imgFile.getOriginalFilename() + " size " + imgFile.getSize());
		return ResponseEntity.ok(imageservice.saveImage(serviceId, imgFile));
	}
}
