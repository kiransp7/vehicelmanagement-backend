package com.app.pojos;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Appointment extends BaseClass {

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date servicetime;

	@ManyToOne
	@JoinColumn(name = "Garage_id")
	private Garage Provider;

	private boolean availability;

	public Appointment(Date servicetime, boolean availability) {
		super();
		this.servicetime = servicetime;
		this.availability = availability;
	}

}
