package com.app.pojos;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table
@Getter
@Setter

public class Garage extends BaseClass {

	@Column(length = 70)
	private String garageName;

	@Column(length = 30)
	private String city;

	@Column(length = 30)
	private String state;

	@Column(length = 6)
	private String pincode;

	@Column
	private String address;

	@Column(length = 10)
	private String rating;

	@OneToOne
	@JoinColumn(name = "userid")
	private User garageOwner;

	@Column(name = "operational")
	private boolean garageStatus = true;

	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(mappedBy = "serviceProvider", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true) // Mandatory
	private List<GarageService> services = new ArrayList<>();

	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(mappedBy = "Provider", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Appointment> bookingSlots = new ArrayList<>();

	public Garage() {

	}

	@Override
	public String toString() {
		return "Garage [ garageName=" + garageName + ", city=" + city + ", state=" + state + ", pincode=" + pincode
				+ ", rating=" + rating + "address =" + address + " operational = " + garageStatus + "]";
	}

	public void addService(GarageService garageService) {
		services.add(garageService);
		garageService.setServiceProvider(this);

	}

	public void removeService(GarageService garageService) {
		services.remove(garageService);
		garageService.setServiceProvider(null);
	}

	public void addAppointments(Appointment slot) {
		bookingSlots.add(slot);
		slot.setProvider(this);
	}

	public void removeAppointments(Appointment slot) {
		bookingSlots.remove(slot);
		slot.setProvider(null);
	}

	public Garage(String garageName, String city, String state, String pincode, String rating, String address) {
		super();
		this.garageName = garageName;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.rating = rating;
		this.address = address;
	}

}
