package com.example.server;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.server.model.User;
import com.example.server.util.InvalidPasswordException;
import com.example.server.service.UserService;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.sql.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Path("/user")
public class Authentication {
    private Map<String, String> responseMsg = new HashMap<>();
    Algorithm algorithm = Algorithm.HMAC256("secret");

    @POST
    @Path("/login")
    @Consumes("application/json")
    @Produces("application/json")
    public Response login(HashMap<String, String> body) {
        try {
            responseMsg.clear();
            String email = body.get("email");
            String password = body.get("password");
            User user = UserService.getInstance().loginUser(email, password);

            String token = getToken(user);
            responseMsg.put("token", token);
            responseMsg.put("id", "" + user.getId());
            responseMsg.put("firstName", user.getFirstName());
            responseMsg.put("lastName", user.getLastName());
            responseMsg.put("email", user.getEmail());
            responseMsg.put("phone", user.getPhone());
            responseMsg.put("role", user.getRole());

            return Response.ok(responseMsg).build();
        } catch (SQLException e) {
            e.printStackTrace();
            responseMsg.put("msg", e.getMessage());
            return Response.status(400).entity(responseMsg).build();
        } catch (InvalidPasswordException e) {
            e.printStackTrace();
            System.out.println(e);
            responseMsg.put("message", e.getMessage() + e.printMessage());
            return Response.status(400).entity(responseMsg).build();
        }
    }

    @POST
    @Path("/register")
    @Consumes("application/json")
    @Produces("application/json")
    public Response register(HashMap<String, String> body) {
        try {
            responseMsg.clear();
            String firstName = body.get("firstName");
            String lastName = body.get("lastName");
            String email = body.get("email");
            String phone = body.get("phone");
            String password = body.get("password");
            User user = UserService.getInstance().registerUser(firstName, lastName, email, phone, password);

            String token = getToken(user);
            responseMsg.put("token", token);
            responseMsg.put("id", "" + user.getId());
            responseMsg.put("firstName", user.getFirstName());
            responseMsg.put("lastName", user.getLastName());
            responseMsg.put("email", user.getEmail());
            responseMsg.put("phone", user.getPhone());
            responseMsg.put("role", user.getRole());

            return Response.ok(responseMsg).build();
        } catch (SQLException e) {
            e.printStackTrace();
            responseMsg.put("message", e.getMessage());
            return Response.status(400).entity(responseMsg).build();
//            return Response.serverError().build();
        }
    }

    private String getToken(User user) {
        return JWT.create()
                .withIssuer("auth0")
                .withClaim("id", user.getId())
                .withClaim("role", user.getRole())
                .withExpiresAt(new Date(new Date().getTime() + (1000 * 60 * 60 * 24)))
                .sign(algorithm);
    }
}
