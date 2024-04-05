package com.app.dto;

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
public class AppointmentDTO {
	
	private long garageId;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date servicetime;

	public AppointmentDTO(long garageId, Date servicetime) {
		super();
		this.garageId = garageId;
		this.servicetime = servicetime;
	}
	
	
	
	

}
