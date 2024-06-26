package com.app.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;

@MappedSuperclass
@Getter
public class BaseClass {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	

}
