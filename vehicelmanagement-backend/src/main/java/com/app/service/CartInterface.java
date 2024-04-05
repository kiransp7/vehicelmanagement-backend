package com.app.service;

import com.app.pojos.Cart;

public interface CartInterface {

	Cart findCartByUserId(long userid);
}
