package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.CartItem;

public interface CartItemDao extends JpaRepository<CartItem, Long> {

	@Query("select c from CartItem c where c.cart.id=:cid")
	List<CartItem> showAllCartItemsOfCart(@Param("cid") long cartid);

	@Query("select c  from CartItem c where c.cart.id=:cid and c.selectedService.id=:gsid")
	CartItem selectCartItemFromCartByGarageServiceId(@Param("cid") long cartId, @Param("gsid") long garageserviceid);

}