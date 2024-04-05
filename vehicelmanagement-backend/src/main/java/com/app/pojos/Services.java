
package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Services extends BaseClass {


	@Column(length = 30)
	private String serviceName;
  
	@Column(length =255)
	private String description;
	
	@Column(length = 400)
	private String imagePath;
	
	@Column(length = 30)
	@Enumerated(EnumType.STRING)
	private Category category;

	

	@Override
	public String toString() {
		return "Services [ serviceName=" + serviceName + ", Description=" + description
				+ ", category=" + category + "]";
	}



	public Services( String serviceName, String description, String imagePath, Category category) {
		super();
		
		this.serviceName = serviceName;
		this.description = description;
		this.imagePath = imagePath;
		this.category = category;
	}

}
