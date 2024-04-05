 package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class OrderItem extends BaseClass {

	
	@OneToOne
	private GarageService orderedservice;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	private Orders order;
	
}
