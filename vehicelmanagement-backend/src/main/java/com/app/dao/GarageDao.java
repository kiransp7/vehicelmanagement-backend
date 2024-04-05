package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Garage;

public interface GarageDao extends JpaRepository<Garage, Long>{
	
	@Query("select g from Garage g where g.garageOwner.id=:uid")
	Garage getGarageByUserID(@Param("uid") Long userid);
	
	@Query("select g from Garage g where g.garageStatus = TRUE")
	List <Garage > getAllGarages();
	
	

  	
	
	

}
