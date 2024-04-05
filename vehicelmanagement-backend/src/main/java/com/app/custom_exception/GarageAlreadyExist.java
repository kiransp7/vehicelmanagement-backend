package com.app.custom_exception;

public class GarageAlreadyExist extends RuntimeException {
	
private static final long serialVersionUID =1L;
	
	public  GarageAlreadyExist(String msg) {
		super(msg);
	}

}
