package com.app.service;

import java.util.List;

import com.app.dto.UserDto;
import com.app.pojos.Cart;
import com.app.pojos.User;

public interface UserServiceInterface {

  UserDto registerUser(User user);

  User getUser(String email,String password);
  
  User updateProfile(User user, long userid);
  
  UserDto viewuserDetails(long userid);
  
  Cart showCart(long userid);
  
  List<UserDto> showAllUsers();
}
