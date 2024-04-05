package com.app.service;

import java.util.Date;

import com.app.dto.BookingURLDTO;

public interface BookingInterface {
	
String  confirmBooking(long appointmentId, long userId );
	
String cancelbooking(long bookingid);

}
