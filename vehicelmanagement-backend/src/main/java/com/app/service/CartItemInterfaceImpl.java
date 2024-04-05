package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CartDao;
import com.app.dao.CartItemDao;
import com.app.dao.GarageServicesDao;
import com.app.pojos.Cart;
import com.app.pojos.CartItem;
import com.app.pojos.GarageService;

@Service
@Transactional
public class CartItemInterfaceImpl implements CartItemInterface {
	@Autowired
	private CartItemDao cartitemdao;
	@Autowired
	private GarageServicesDao garageservicedao;
	@Autowired
	private CartDao cartdao;

//	@Override
//	public cartItem addcartItemToCart(long userId, long garageServiceId) {
//		User user = userdao.findById(userId)
//				.orElseThrow(() -> new UserNotFoundException("User Not Found  With this ID"));
////		Cart cart = new Cart();
////		cart.setCartOwner(user);
//		
//		
//		
//		//System.out.println("user cart " +cart.getId());
//		GarageService garageservice = garageservicedao.findById(garageServiceId)
//				.orElseThrow(() -> new ResourceNotFoundException("Service With this iD does not Exist"));
//		cartItem cartitem = new cartItem();
//		
//		cartitem.setSelectedService(garageservice);
//		
//		System.out.println("cartitem creaated succesfully" + cartitem.getSelectedService());
//		cart.addCartItems(cartitem);
//		
//		return cartitem;
//	}

	public CartItem addcartItemToCart(long userId, long garageServiceId) {

		Cart cart = cartdao.findCartByUserId(userId);

		GarageService garageservice = garageservicedao.findById(garageServiceId)
				.orElseThrow(() -> new ResourceNotFoundException("Service With this iD does not Exist"));

		CartItem cartitem = new CartItem();

		cartitem.setSelectedService(garageservice);

		System.out.println("cartitem creaated succesfully" + cartitem.getSelectedService());
		cartitem.setCart(cart);

		CartItem savedCartItem = cartitemdao.save(cartitem);
		
		List<CartItem> cartItems = cartitemdao.showAllCartItemsOfCart(cart.getId());
		
		double sum = 0;
		
		sum = cartItems.stream().map(c->c.getSelectedService().getAmount()).reduce((double) 0, (a, i) -> a + i);
		
		int count = (int) cartItems.stream().count();
		
		System.out.println("total qty in cart " +count);
		System.out.println("cart total" + sum);
		
		cart.setTotalCartPrice(sum);
		cart.setTotalItems(count);
		cartdao.saveAndFlush(cart);
		
          
		return savedCartItem;
	}

	@Override
	public List<CartItem> showAllCartItemsOfCart(long userid) {

		Cart cart = cartdao.findCartByUserId(userid);

		System.out.println("cart id = " + cart.getId());

		List<CartItem> cartItems = cartitemdao.showAllCartItemsOfCart(cart.getId());

		if (cartItems != null) {
			return cartItems;
		}

		else {
			return null;
		}
	}

	@Override
	public CartItem removeCartItemFromCart(long userid, long garageserviceid) {
		// TODO Auto-generated method stub

		Cart cart = cartdao.findCartByUserId(userid);

		CartItem cartItem = cartitemdao.selectCartItemFromCartByGarageServiceId(cart.getId(), garageserviceid);
  
		  cartitemdao.deleteById(cartItem.getId());
		 
		System.out.println(" removed cartitem = " + cartItem);
		
List<CartItem> cartItems = cartitemdao.showAllCartItemsOfCart(cart.getId());
		
		double sum = 0;
		
		sum = cartItems.stream().map(c->c.getSelectedService().getAmount()).reduce((double) 0, (a, i) -> a + i);
		
		int count = (int) cartItems.stream().count();
		
		System.out.println("total qty in cart " +count);
		System.out.println("cart total" + sum);
		
		cart.setTotalCartPrice(sum);
		cart.setTotalItems(count);
		cartdao.saveAndFlush(cart);
		
          

		return cartItem;
	}

}
