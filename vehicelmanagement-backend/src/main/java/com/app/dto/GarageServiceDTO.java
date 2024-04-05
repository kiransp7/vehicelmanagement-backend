package com.app.dto;

import com.app.pojos.Garage;
import com.app.pojos.Services;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;




@Getter
@Setter
@NoArgsConstructor
@ToString
public class GarageServiceDTO {

        private Garage serviceProvider;
       
		private Services providedService;

		private double amount;
		
		public GarageServiceDTO(double amount) {
			this.amount = amount;
		}
		

		

	}
	
	
	
	
