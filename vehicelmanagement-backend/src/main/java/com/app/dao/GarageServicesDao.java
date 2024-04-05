package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Category;
import com.app.pojos.GarageService;

public interface GarageServicesDao extends JpaRepository<GarageService,Long>{

	@Query("select s from GarageService s where s.serviceProvider.id=:sp and s.providedService.category=:cg")
	List<GarageService> getAllServicesByCategoryName(@Param("sp") Long garageid,@Param("cg") Category category);
    
	@Query("select s from GarageService s where s.serviceProvider.id=:gid and s.id=:sid")
	GarageService removeServiceFromGarage(@Param("gid") long garageid,@Param("sid") long servieid);

	@Query("select s from GarageService s where s.serviceProvider.id=:sp ")
	List<GarageService> getAllServicecByGarageId(@Param("sp") Long garageid);
	
}
