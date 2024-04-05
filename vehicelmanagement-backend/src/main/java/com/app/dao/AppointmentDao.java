package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Appointment;

public interface AppointmentDao extends JpaRepository<Appointment,Long>{
	
	@Query("select a from Appointment a where a.Provider.id=:gid and a.availability = TRUE")
	List<Appointment> showAllAppointments(@Param("gid") long garageid);
	

}
