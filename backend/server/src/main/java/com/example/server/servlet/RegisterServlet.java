package com.example.server.servlet;

import com.example.server.model.Error;
import com.example.server.model.User;
import com.example.server.service.UserService;
import com.example.server.util.Util;
import com.example.server.util.validaiton.email.InvalidEmailException;
import com.example.server.util.validaiton.name.InvalidNameException;
import com.example.server.util.validaiton.password.InvalidPasswordException;
import com.example.server.util.validaiton.phone.InvalidPhoneException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.mail.MessagingException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

import static com.example.server.util.Util.getToken;

@WebServlet(name = "RegisterServlet", value = "/api/auth/register")
public class RegisterServlet extends HttpServlet {

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
            user = UserService.getInstance().registerUser(user.getFirstName(), user.getLastName(), user.getEmail(), user.getPhone(), user.getPassword());

            String token = getToken(user);
            user.setToken(token);

            response.setStatus(201);
            response.setCharacterEncoding("UTF-8");
            response.setHeader("Content-Type", "application/json");
            response.getWriter().println(GSON.toJson(user));
        } catch (SQLException e) {
//            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error("Register servlet, sql exception: " + e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (InvalidPasswordException e) {
//            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error(e.getMessage() + e.printMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (InvalidPhoneException e) {
//            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error(e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (InvalidNameException e) {
//            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error(e.getMessage() + e.printMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (InvalidEmailException e) {
//            e.printStackTrace();
            response.setStatus(400);
            Error error = new Error(e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        }
    }
}
