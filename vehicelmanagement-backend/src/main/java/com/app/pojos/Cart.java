package com.app.pojos;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class Cart extends BaseClass {
	@Column(name = "total_items")
	private int totalItems;
	@Column(name = "total_cart_price")
	private double totalCartPrice;
	@CreationTimestamp // hib annotation to add creation date auto : once @ time of saving the entity
	@Column(name = "created_on")
	private LocalDate createdOn;
	@UpdateTimestamp // hib annotation to update the date auto : @ time of updating cart
	@Column(name = "last_updated_on")
	private LocalDate lastUpdatedOn;
	
	
	
	// Cart HAS-A Customer Cart ----> User
	// Cart : one , child , owning
	@OneToOne // def fetch type : EAGER
	@JoinColumn(name = "customer_id", nullable = false)
	private User cartOwner;
	
	
	

}
