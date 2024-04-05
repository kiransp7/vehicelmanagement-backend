package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Services;

public interface ServiceDao extends JpaRepository<Services,Long> {

}
