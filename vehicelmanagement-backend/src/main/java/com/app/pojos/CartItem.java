package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "cart_items")
@NoArgsConstructor
@Getter
@Setter
//@ToString(exclude ="selectedService")
public class CartItem extends BaseClass {
//quantity , totalPrice , cart , product

	@ManyToOne
	@JoinColumn(name = "cart_id", nullable = false)
	private Cart cart;
	// CartItem 1---->1 Product
	@OneToOne
	@JoinColumn(name = "GS_id")
	private GarageService selectedService;

}