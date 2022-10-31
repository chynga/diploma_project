package com.example.server.servlet;

import com.example.server.model.Error;
import com.example.server.model.User;
import com.example.server.model.EmailCode;
import com.example.server.service.UserService;
import com.example.server.util.Util;
import com.example.server.util.MailingException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "ConfirmEmailServlet", value = "/api/auth/email/verify")
public class ConfirmEmailServlet extends HttpServlet {

    private static final Gson GSON = new GsonBuilder().create();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String json = Util.readInputStream(request.getInputStream());
            EmailCode verificationCode = GSON.fromJson(json, EmailCode.class);
            User user = UserService.getInstance().confirmEmail(verificationCode.getEmail(), verificationCode.getCode());
            response.setStatus(201);
            response.setHeader("Content-Type", "application/json");
            response.getOutputStream().println(GSON.toJson(user));
        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error("Confirmation servlet, sql exception: " + e.getMessage());
            response.getOutputStream().println(GSON.toJson(error));
        } catch (MailingException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error(e.getMessage());
            response.getOutputStream().println(GSON.toJson(error));
        }
    }
}