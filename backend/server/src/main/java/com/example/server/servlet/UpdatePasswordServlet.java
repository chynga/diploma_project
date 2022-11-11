package com.example.server.servlet;

import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.server.model.Error;
import com.example.server.model.User;
import com.example.server.service.UserService;
import com.example.server.util.AuthorizationException;
import com.example.server.util.Util;
import com.example.server.util.validaiton.name.InvalidNameException;
import com.example.server.util.validaiton.password.InvalidPasswordException;
import com.example.server.util.validaiton.phone.InvalidPhoneException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "UpdatePasswordServlet", value = "/api/auth/password/update")
public class UpdatePasswordServlet extends HttpServlet {
    private static final Gson GSON = new GsonBuilder().create();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String authTokenHeader = request.getHeader("Authorization");
            if (authTokenHeader == null) {
                throw new AuthorizationException("not authorized");
            }
            String token = authTokenHeader.split("\\s+")[1];
            DecodedJWT decodedJWT = Util.decodeToken(token);
            Claim role = decodedJWT.getClaim("role");
            Claim id = decodedJWT.getClaim("id");
            if (!role.asString().equals("client")) {
                throw new AuthorizationException("not client");
            }

            String json = Util.readInputStream(request.getInputStream());
            User user = GSON.fromJson(json, User.class);
            user.setId(id.asInt());
            UserService.getInstance().updatePassword(user);
        } catch (AuthorizationException e) {
            e.printStackTrace();
            response.setStatus(400);
            response.setHeader("Content-Type", "application/json");
            Error error = new Error(e.getMessage());
            response.getWriter().println(GSON.toJson(error));
        } catch (SQLException e) {
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
        }
    }
}
