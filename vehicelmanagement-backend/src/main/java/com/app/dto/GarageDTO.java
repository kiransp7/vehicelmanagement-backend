package com.app.dto;

import com.app.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class GarageDTO {
	
    private String garageName;
	
	private String city;
	
	private String state;
	
    private String pincode;

	private String rating;
	
	private String email;
	
	private String address;
	
	private User garageOwner;

	

	@Override
	public String toString() {
		return "GarageDTO [garageName=" + garageName + ", city=" + city + ", state=" + state + ", pincode=" + pincode
				+ ", rating=" + rating + "]";
	}



	public GarageDTO(String garageName, String city, String state, String pincode, String rating, 
			String address , User garageOwner) {
		super();
		this.garageName = garageName;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.rating = rating;
		this.address = address;
		this.garageOwner = garageOwner;
	}


	
	
	
	
	
	
	

}
