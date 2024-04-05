package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class Invoice extends BaseClass {
	
	@CreationTimestamp // hib annotation to add creation date auto : once @ time of saving the entity
	@Column(name = "created_on")
	private LocalDate createdOn;
	
	private double totalAmount;
	
	@OneToOne
	private Orders orderid;
	
	@OneToMany
	List<OrderItem> orderitems = new ArrayList<>();
	

}
