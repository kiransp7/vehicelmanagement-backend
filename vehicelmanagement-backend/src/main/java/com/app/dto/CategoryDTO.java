package com.app.dto;

import com.app.pojos.Category;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class CategoryDTO {

  private long garageId;
  private Category category;
  
  
  public CategoryDTO() {
	  super();
  }
  
public CategoryDTO(int garageId, Category category) {
	super();
	this.garageId = garageId;
	this.category = category;
}
  
	
}
