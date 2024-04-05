package com.app.dto;

import com.app.pojos.Category;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@NoArgsConstructor
@JsonInclude(Include.NON_EMPTY)
public class ServiceDTO {
	

	private String serviceName;

	private String Description;

	private  Category category;
	
	@JsonProperty(access=Access.READ_ONLY)
	private String imagePath;
	
	private long garageid;
	private double amount;

	public ServiceDTO(String serviceName, String description, Category category, long garageid, double amount,
			String imagePath) {
		super();
		this.serviceName = serviceName;
		this.Description = description;
		this.category = category;
		this.garageid = garageid;
		this.amount = amount;
		this.imagePath = imagePath;
	}

	
	
}
