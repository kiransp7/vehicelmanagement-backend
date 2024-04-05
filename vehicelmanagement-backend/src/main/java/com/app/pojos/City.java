package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
@NoArgsConstructor
public class City extends BaseClass {
	

	private String pincode;
	
	private String cityName;
	
	private String State;
	
	private String Country;

	
	
	public City(String pincode, String cityName, String state, String country) {
		super();
		this.pincode = pincode;
		this.cityName = cityName;
		State = state;
		Country = country;
	}



	
	
	
}
