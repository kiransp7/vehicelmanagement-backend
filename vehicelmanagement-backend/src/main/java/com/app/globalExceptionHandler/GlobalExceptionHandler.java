package com.app.globalExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.app.custom_exception.GarageAlreadyExist;
import com.app.custom_exception.ResourceNotFoundException;

import com.app.custom_exception.UserAlredayExistException;
import com.app.dto.ResponseDto;

@ControllerAdvice
public class GlobalExceptionHandler {

	
	@ExceptionHandler(UserAlredayExistException.class)
	public ResponseEntity<?> handleUserAlredayExistException(UserAlredayExistException e){
		System.out.println("Email already used");
		return new ResponseEntity<>(new ResponseDto<>("error" , e.getMessage()),HttpStatus.UNAUTHORIZED);
		
	}
	
	@ExceptionHandler(GarageAlreadyExist.class)
	public ResponseEntity<?> handleGarageAlreadyExist(GarageAlreadyExist e){
		System.out.println("Garage already exist for this user");
		return new ResponseEntity<>(new ResponseDto<>("error" , e.getMessage()),HttpStatus.UNAUTHORIZED);
		
	}
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourseNotFoundException(ResourceNotFoundException e){
		System.out.println("requested resource not found");
		return new ResponseEntity<>(new ResponseDto<>("error" , e.getMessage()),HttpStatus.UNAUTHORIZED);
		
	}
}
