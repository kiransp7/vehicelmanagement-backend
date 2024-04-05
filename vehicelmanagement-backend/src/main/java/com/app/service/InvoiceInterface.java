package com.app.service;

import com.app.pojos.Invoice;

public interface InvoiceInterface {

	Invoice generateInvoice(long userId);
	
}
