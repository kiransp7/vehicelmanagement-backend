package com.app.pojos;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name= "Orders_Table")
@Getter
@Setter
public class Orders extends BaseClass{
	
	@CreationTimestamp // hib annotation to add creation date auto : once @ time of saving the entity
	@Column(name = "created_on")
	private LocalDate createdOn;
	@UpdateTimestamp // hib annotation to update the date auto : @ time of updating cart
	@Column(name = "last_updated_on")
	private LocalDate lastUpdatedOn;
	
	private double orderAmount;
	
	@OneToOne
	private Bookings booking;
	

}
