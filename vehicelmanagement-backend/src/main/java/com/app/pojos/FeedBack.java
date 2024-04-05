package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@ToString
public class FeedBack extends BaseClass {
  
	@OneToOne
	private Garage garageId;
	@OneToOne
	private Bookings bookingId;

	private String description;
	
}
