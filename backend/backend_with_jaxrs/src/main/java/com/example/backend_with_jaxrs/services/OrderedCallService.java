package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.OrderedCallDAO;
import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.OrderedCall;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;

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

    public ArrayList<OrderedCall> getOrderedCalls() throws CustomException {
        ArrayList<OrderedCall> orderedCalls = OrderedCallDAO.getInstance().getOrderedCalls();
        User client;
        for (OrderedCall orderedCall : orderedCalls) {
            client = UserDAO.getInstance().getUserById(orderedCall.getClientId());
            orderedCall.setClient(client);
        }

        return orderedCalls;
    }

    public void orderCall(OrderedCall orderedCall) throws CustomException {
        OrderedCallDAO.getInstance().orderCall(orderedCall);
    }
}
