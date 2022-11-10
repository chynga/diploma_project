package com.example.server.service;

import com.example.server.dao.OrderedCallDAO;
import com.example.server.model.OrderedCall;
import com.example.server.util.validaiton.phone.InvalidPhoneException;
import com.example.server.util.validaiton.phone.PhoneValidator;

import java.sql.SQLException;
import java.util.ArrayList;

public class OrderedCallService {

    private static OrderedCallService INSTANCE;

    private OrderedCallService() {}

    public static OrderedCallService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new OrderedCallService();
        }

        return INSTANCE;
    }

    public void addOrderedCall(OrderedCall orderedCall) throws SQLException, InvalidPhoneException {
        PhoneValidator.isValid(orderedCall.getPhone());
        OrderedCallDAO.getInstance().addOrderedCall(orderedCall);
    }

    public ArrayList<OrderedCall> getOrderedCalls() throws SQLException {
        return OrderedCallDAO.getInstance().getOrderedCalls();
    }
}
