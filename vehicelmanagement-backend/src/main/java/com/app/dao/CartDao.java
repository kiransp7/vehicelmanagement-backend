package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Cart;

public interface CartDao extends JpaRepository<Cart, Long>{

	@Query("select c from Cart c where c.cartOwner.id=:uid")
	Cart findCartByUserId(@Param("uid") long userid);
}
