package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.pojos.User;

public interface UserDao extends JpaRepository<User,Long> {
	
	
	@Query("select u from User u where u.email=:em")
	User findByEmail(@Param("em") String email);
	
         

}
