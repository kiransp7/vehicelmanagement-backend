package com.app.pojos;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Bookings extends BaseClass {
	@CreationTimestamp
	private LocalDate bookingDate;

	@ManyToOne
	@JoinColumn(name = "customer_id")
	private User customer;

	@OneToOne
	private Appointment appoinment;

	@Enumerated(EnumType.STRING)
	private Bookingstatus bookingStatus;

	public Bookings(Bookingstatus bookingStatus) {
		super();
		this.bookingStatus = bookingStatus;
	}

}
