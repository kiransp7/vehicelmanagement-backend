package com.app.dto;

import java.time.LocalDate;
import com.app.pojos.Appointment;
import com.app.pojos.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class BookingDTO {

	private LocalDate bookingDate;

	@JsonIgnoreProperties(value = "bookings")
	private User customer;

	private Appointment appoinment;

	private boolean bookingStatus;

	public BookingDTO(LocalDate bookingDate, User customer, Appointment appoinment, boolean bookingStatus) {
		super();
		this.bookingDate = bookingDate;
		this.customer = customer;
		this.appoinment = appoinment;
		this.bookingStatus = bookingStatus;
	}

}
