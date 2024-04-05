package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.UserNotFoundException;
import com.app.dao.CartDao;
import com.app.dao.UserDao;
import com.app.dto.UserDto;
import com.app.pojos.Cart;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserServiceInterface {

	@Autowired
	public UserDao userdao;

	@Autowired
	CartDao cartdao;
	
	@Autowired
	  private PasswordEncoder bcryptEncoder;

	@Override
	public UserDto registerUser(User user) {
		Cart myCart = new Cart();
		// myCart.setCartOwner(saveduser);

		user.setEncPassword(bcryptEncoder.encode(user.getEncPassword().toString()));
		
		System.out.println(user.getEncPassword());
		user.setRole(Role.CUSTOMER);
		user.setEnabled(1);

		User saveduser = userdao.save(user);
		myCart.setCartOwner(saveduser);

		cartdao.save(myCart);

		UserDto dto = new UserDto(saveduser.getFirstname(), saveduser.getLastname(), saveduser.getEmail(),
				saveduser.getRole(), saveduser.getContact());
		return dto;
	}

	@Override
	public User getUser(String email, String password) {
		User user = userdao.findByEmail(email);
		System.out.println("user from login" + user);
		if (user != null) {
        System.out.println(user.toString());
			return user;
		} else {
			throw new UserNotFoundException("User Not Found Please Try With Correct Credentials");
		}
	}

	@Override
	public User updateProfile(User user, long userid) {
		// userdao.updateProfile(user.getEmail(), user.getPassword(), user.getContact(),
		// user.getRole(),userid);

		User updateduser = userdao.findById(userid).orElseThrow(() -> new UserNotFoundException("usr not valid"));
		System.out.println(updateduser);
		updateduser.setRole(user.getRole());
		updateduser.setEmail(user.getEmail());
		updateduser.setFirstname(user.getFirstname());
		updateduser.setLastname(user.getLastname());
		updateduser.setContact(user.getContact());
		updateduser.setEncPassword(user.getEncPassword());
		userdao.saveAndFlush(updateduser);

		return updateduser;
	}

	@Override
	public Cart showCart(long userid) {
		Cart cart = cartdao.findCartByUserId(userid);
		return cart;
	}

	public UserDto viewuserDetails(long userid) {
		User user = userdao.findById(userid).orElseThrow(() -> new UserNotFoundException("invalid user id"));
		UserDto userdto = new UserDto(user.getFirstname(), user.getLastname(), user.getEmail(), user.getRole(),
				user.getContact());

		return userdto;

	}
	
	public List<UserDto> showAllUsers(){
		List<User> userlist = userdao.findAll();
		      List <UserDto> userdata = userlist.stream()
		    		  .filter(u->u.getRole().equals(Role.CUSTOMER))
		    		  .map(s-> new UserDto(s.getFirstname(),s.getLastname(),s.getEmail(),s.getRole(),s.getContact())).collect(Collectors.toList());
		
		   return userdata;
		
	}

}
