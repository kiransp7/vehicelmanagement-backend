package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Bookings;

public interface BookingDao extends JpaRepository<Bookings,Long> {

	 @Query("select b from Bookings b where b.customer.id=:uid")
	 public List<Bookings> findBookingByUserId (@Param ("uid") long userid);
}
