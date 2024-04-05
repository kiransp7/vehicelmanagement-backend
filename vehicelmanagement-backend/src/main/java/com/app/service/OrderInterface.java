package com.app.service;

import java.util.List;

import com.app.dto.orderHistoryDTO;
import com.app.pojos.Invoice;
import com.app.pojos.OrderItem;

public interface OrderInterface {

	public Invoice createOrder(long userid);

	List<orderHistoryDTO> viewOrders(long userid);

	public List<OrderItem> viewOrderDetails(long orderid);
}
