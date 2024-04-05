package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.UserNotFoundException;
import com.app.dao.BookingDao;
import com.app.dao.InvoiceDao;
import com.app.dao.OrdersDao;
import com.app.dao.UserDao;
import com.app.pojos.Invoice;
import com.app.pojos.User;


@Service
@Transactional
public class InvoicInterfaceImpl implements InvoiceInterface {

	@Autowired
	private InvoiceDao invoicedao;
	
	@Autowired
	private UserDao userdao;
	
	@Autowired
	private OrdersDao orderdao;
	
	@Autowired
	private BookingDao bookingdao;

	@Override
	public Invoice generateInvoice(long userId) {
		 User customer = userdao.findById(userId).orElseThrow(()->new UserNotFoundException("user id not valid"));
		 
		
		return null;
	}
	
	
	
	
	
}
