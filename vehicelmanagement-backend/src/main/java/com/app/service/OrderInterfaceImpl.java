package com.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.BookingDao;
import com.app.dao.CartDao;
import com.app.dao.CartItemDao;
import com.app.dao.InvoiceDao;
import com.app.dao.OrderItemDao;
import com.app.dao.OrdersDao;
import com.app.dto.orderHistoryDTO;
import com.app.pojos.Bookings;
import com.app.pojos.Bookingstatus;
import com.app.pojos.Cart;
import com.app.pojos.CartItem;
import com.app.pojos.Invoice;
import com.app.pojos.OrderItem;
import com.app.pojos.Orders;

@Service
@Transactional
public class OrderInterfaceImpl implements OrderInterface {

	@Autowired
	private CartDao cartdao;

	@Autowired
	private CartItemDao cartitemdao;

	@Autowired
	private BookingDao bookingdao;

	@Autowired
	private InvoiceDao invoicedao;

	@Autowired
	private OrdersDao orderdao;

	@Autowired
	private OrderItemDao orderitemdao;

	@Override
	public Invoice createOrder(long userid) {

		Orders newOrder = new Orders();

		Cart cart = cartdao.findCartByUserId(userid);

		List<CartItem> selecteditems = cartitemdao.showAllCartItemsOfCart(cart.getId());

		List<Bookings> booking = bookingdao.findBookingByUserId(userid);

		for (Bookings b : booking) {
			if (b.getBookingStatus().equals(Bookingstatus.CONFIRMED)) {
				newOrder.setBooking(b);
				break;
			}
		}

		Orders placedorder = orderdao.save(newOrder);

		for (CartItem i : selecteditems) {
			OrderItem newOrderItem = new OrderItem();
			newOrderItem.setOrderedservice(i.getSelectedService());
			newOrderItem.setOrder(placedorder);
			orderitemdao.save(newOrderItem);
			// orderlist.add(newOrderItem);

		}

		List<Long> cartItemId = selecteditems.stream().map(s -> s.getId()).collect(Collectors.toList());
		System.out.println(cartItemId);
		for (long l : cartItemId) {
			cartitemdao.deleteById(l);
		}

		Orders updatedOrder = orderdao.findById(placedorder.getId())
				.orElseThrow(() -> new ResourceNotFoundException("order not found"));

		Invoice invoice = new Invoice();
		invoice.setOrderid(updatedOrder);
		List<OrderItem> listForInvoice = orderitemdao.getAllItemsOfOrder(updatedOrder.getId());

		double sum = 0;
		sum = listForInvoice.stream().map(o -> o.getOrderedservice().getAmount()).reduce((double) 0, (a, i) -> a + i);

		System.out.println(sum);

		updatedOrder.setOrderAmount(sum);

		orderdao.saveAndFlush(updatedOrder);

		invoice.setOrderitems(listForInvoice);

		invoice.setTotalAmount(sum);

		cart.setTotalCartPrice(0);
		cart.setTotalItems(0);

		cartdao.saveAndFlush(cart);

		Invoice generatedInvoice = invoicedao.save(invoice);

		return generatedInvoice;
	}

	@Override
	public List<orderHistoryDTO> viewOrders(long userid) {

		List<Orders> userorders = orderdao.viewOrders(userid);

		Collections.reverse(userorders);
		List<orderHistoryDTO> finallist = new ArrayList<>();
		finallist = userorders.stream()
				.map(s -> new orderHistoryDTO(s.getOrderAmount(), s.getCreatedOn(),
						s.getBooking().getAppoinment().getServicetime(),
						s.getBooking().getAppoinment().getProvider().getGarageName(),
						s.getBooking().getAppoinment().getProvider().getCity(),
						s.getBooking().getAppoinment().getProvider().getGarageOwner().getContact()))
				.collect(Collectors.toList());

		return finallist;
	}

	@Override
	public List<OrderItem> viewOrderDetails(long orderid) {

		List<OrderItem> orderItems = orderitemdao.getAllItemsOfOrder(orderid);

		return orderItems;
	}

}
