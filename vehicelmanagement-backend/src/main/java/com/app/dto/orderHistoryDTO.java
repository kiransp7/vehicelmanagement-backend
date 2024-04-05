package com.app.dto;

import java.time.LocalDate;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class orderHistoryDTO {
	private double totalAmount;
	private LocalDate createdOn;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date servicetime;
	private String garageName;
	private String city;
	private String garageContact;
	public orderHistoryDTO(double totalAmount, LocalDate createdOn, Date servicetime, String garageName, String city,
			String garageContact) {
		super();
		this.totalAmount = totalAmount;
		this.createdOn = createdOn;
		this.servicetime = servicetime;
		this.garageName = garageName;
		this.city = city;
		this.garageContact = garageContact;
	}

	
}
