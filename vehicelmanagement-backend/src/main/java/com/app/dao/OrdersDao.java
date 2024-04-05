package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Orders;

public interface OrdersDao extends JpaRepository<Orders,Long> {
	
	@Query("Select o from Orders o where o.booking.customer.id=:uid")
	public List<Orders> viewOrders(@Param("uid") long userid);

}
