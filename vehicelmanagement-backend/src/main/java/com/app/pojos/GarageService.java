package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@NoArgsConstructor
@Getter
@Setter
public class GarageService extends BaseClass {

	@ManyToOne
	@JoinColumn(name = "GarageId", nullable = false) // to specify FK col name
	@JsonProperty(access=Access.WRITE_ONLY)
	private Garage serviceProvider;

	@OneToOne
	@JoinColumn(name = "GS_id")
	private Services providedService;

	private double amount;

	public GarageService(double amount) {
		super();
		this.amount = amount;
	}

}
