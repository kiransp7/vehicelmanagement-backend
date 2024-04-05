package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class BookingURLDTO {

	private long customerID;

	private long appoinmentID;

	private boolean bookingStatus = true;

	public BookingURLDTO(long customerid, long appointmentid) {
		super();
		this.customerID = customerid;
		this.appoinmentID = appointmentid;

	}

}
