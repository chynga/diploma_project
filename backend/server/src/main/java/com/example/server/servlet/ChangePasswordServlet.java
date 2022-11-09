package com.example.server.servlet;

import com.example.server.model.EmailCode;
import com.example.server.model.Error;
import com.example.server.service.UserService;
import com.example.server.util.MailingException;
import com.example.server.util.Util;
import com.example.server.util.validaiton.password.InvalidPasswordException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.mail.MessagingException;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "ChangePasswordServlet", value = "/api/auth/password/recover")
public class ChangePasswordServlet extends HttpServlet {

    private static final Gson GSON = new GsonBuilder().create();

//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String json = Util.readInputStream(request.getInputStream());
        EmailCode recoveryCode = GSON.fromJson(json, EmailCode.class);

        try {
            if (recoveryCode.getCode() == null) {
                UserService.getInstance().sendRecoveryCode(recoveryCode.getEmail());
            } else {
                UserService.getInstance().resetPassword(recoveryCode.getEmail(), recoveryCode.getCode(), recoveryCode.getPassword()); // throws error
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (MailingException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error(e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (InvalidPasswordException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error(e.getMessage() + e.printMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (MessagingException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error(e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        }
    }
}
