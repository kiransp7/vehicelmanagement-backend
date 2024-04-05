package com.app.service;

import java.util.List;

import com.app.pojos.CartItem;

public interface CartItemInterface {
CartItem addcartItemToCart(long userId,long garageServiceId);

List<CartItem> showAllCartItemsOfCart(long cartid);

CartItem removeCartItemFromCart(long userid,long garageserviceid);


}
