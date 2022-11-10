package com.example.server.servlet;

import com.example.server.model.Error;
import com.example.server.model.OrderedCall;
import com.example.server.model.User;
import com.example.server.service.OrderedCallService;
import com.example.server.service.UserService;
import com.example.server.util.Util;
import com.example.server.util.validaiton.phone.InvalidPhoneException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import static com.example.server.util.Util.getToken;

@WebServlet(name = "OrderCallServlet", value = "/api/order-call")
public class OrderCallServlet extends HttpServlet {
    private static final Gson GSON = new GsonBuilder().create();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            ArrayList<OrderedCall> orderedCalls = OrderedCallService.getInstance().getOrderedCalls();

            response.setStatus(201);
            response.setCharacterEncoding("UTF-8");
            response.setHeader("Content-Type", "application/json");
            response.getWriter().println(GSON.toJson(orderedCalls));
        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error("OrderCallServlet servlet, sql exception: " + e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String json = Util.readInputStream(request.getInputStream());
            OrderedCall orderedCall = GSON.fromJson(json, OrderedCall.class);
            OrderedCallService.getInstance().addOrderedCall(orderedCall);

            response.setStatus(201);
        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error("OrderCallServlet servlet, sql exception: " + e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (InvalidPhoneException e) {
            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error(e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        }
    }
}
