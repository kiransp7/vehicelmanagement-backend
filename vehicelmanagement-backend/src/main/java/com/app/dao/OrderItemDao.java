package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.OrderItem;

public interface OrderItemDao extends JpaRepository<OrderItem, Long>{

	@Query("Select o from OrderItem o where o.order.id=:oid")
	List<OrderItem> getAllItemsOfOrder(@Param ("oid") long orderId);
	
}
