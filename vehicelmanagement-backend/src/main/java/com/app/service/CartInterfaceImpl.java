package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.custom_exception.UserNotFoundException;
import com.app.dao.CartDao;
import com.app.dao.UserDao;
import com.app.pojos.Cart;
import com.app.pojos.User;

public class CartInterfaceImpl implements CartInterface {

	@Autowired
    private CartDao cartdao;
	
	@Autowired
	private UserDao userdao;

	@Override
	public Cart findCartByUserId(long userid) {
		User user = userdao.findById(userid).orElseThrow(()->new UserNotFoundException("User Not Found With Id "+userid +" "));
		Cart cart = cartdao.findCartByUserId(userid);
		return cart;
	}
	
}
