package com.example.server.servlet;

import com.example.server.model.User;
import com.example.server.model.Error;
import com.example.server.service.UserService;
import com.example.server.util.Util;
import com.example.server.util.password.InvalidPasswordException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.sql.SQLException;

import static com.example.server.util.Util.getToken;

@WebServlet(name = "LoginServlet", value = "/api/users/login")
public class LoginServlet extends HttpServlet {

    private static final Gson GSON = new GsonBuilder().create();
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
            String json = Util.readInputStream(request.getInputStream());
            User user = GSON.fromJson(json, User.class);
            user = UserService.getInstance().loginUser(user.getEmail(), user.getPassword());

            String token = getToken(user);
            user.setToken(token);

            response.setStatus(201);
            response.setHeader("Content-Type", "application/json");
            response.getOutputStream().println(GSON.toJson(user));
        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error("Login servlet, sql exception: " + e.getMessage());
            response.getOutputStream().println(GSON.toJson(error));
        } catch (InvalidPasswordException e) {
//            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error(e.getMessage() + e.printMessage());
            response.getOutputStream().println(GSON.toJson(error));
        }
    }
}
