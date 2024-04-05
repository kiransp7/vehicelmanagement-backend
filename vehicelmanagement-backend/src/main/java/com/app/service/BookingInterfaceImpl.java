package com.app.service;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.custom_exception.UserNotFoundException;
import com.app.dao.AppointmentDao;
import com.app.dao.BookingDao;
import com.app.dao.UserDao;
import com.app.dto.BookingDTO;
import com.app.dto.BookingURLDTO;
import com.app.pojos.Appointment;
import com.app.pojos.Bookings;
import com.app.pojos.Bookingstatus;
import com.app.pojos.User;

@Service
@Transactional
public class BookingInterfaceImpl implements BookingInterface {

	@Autowired
	private BookingDao bookingdao;

	@Autowired
	private UserDao userdao;

	@Autowired
	private AppointmentDao appointementdao;

	@Override
	public String confirmBooking(long appointmentId, long userId) {
		System.out.println("In confirmBooking class" + appointmentId + " " + userId);

		Appointment appointment = appointementdao.findById(appointmentId)
				.orElseThrow(() -> new ResourceNotFoundException("invalid appointement id"));

		User customer = userdao.findById(userId).orElseThrow(() -> new UserNotFoundException("invalid user ID"));

		if (appointment.isAvailability() == true) {

			

			

				Bookings booking = new Bookings(Bookingstatus.CONFIRMED);

				booking.setCustomer(customer);

				booking.setAppoinment(appointment);
				// customer.addBookings(booking);

				bookingdao.save(booking);

				appointment.setAvailability(false);

				// BookingDTO bookingdto = new
				// BookingDTO(booking.getBookingDate(),booking.getCustomer(),booking.getAppoinment(),booking.isBookingStatus());
				// System.out.println("Booking dto status " + booking);
				// BookingDTO bookingdto = new
				// BookingDTO(booking.getBookingDate(),booking.getCustomer().getId(),booking.getAppoinment().getId());
                //return bookingdto;
				return "booking done successfully";

			
		} else {
			return "Booking slot not available";
		}

	}

	@Override
	public String cancelbooking(long bookingid) {
		Bookings booking = bookingdao.findById(bookingid).orElseThrow(()->new ResourceNotFoundException("Booking with id"+bookingid+ "Not Found"));
		booking.setBookingStatus(Bookingstatus.CANCELLED);
	Appointment app = 	appointementdao.findById(booking.getAppoinment().getId()).orElseThrow(()->new ResourceNotFoundException("appppointment with  appointment id Not Found"));
		app.setAvailability(true);
		appointementdao.saveAndFlush(app);
		bookingdao.saveAndFlush(booking);
		
		return "BOOKING CANCELLED SUCCESSFULLY";
	}

}
