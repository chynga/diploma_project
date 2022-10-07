package com.example.server;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.example.server.model.User;
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

    @GET
    @Path("/login")
    @Produces("application/json")
    public Response login() {
        responseMsg.clear();
        responseMsg.put("name", "chyngys");
        responseMsg.put("surname", "kurban");
        return Response.ok(responseMsg).build();
    }

    @POST
    @Path("/register")
    @Consumes("application/json")
    @Produces("application/json")
    public Response register(HashMap<String, String> msg) {
        responseMsg.clear();
        try {
            String name = msg.get("name");
            String surname = msg.get("surname");
            String email = msg.get("email");
            String phone = msg.get("phone");
            String password = msg.get("password");
            User user = UserService.getInstance().registerUser(name, surname, email, phone, password);
            String token = getToken(user);
            responseMsg.put("token", token);
            return Response.ok(responseMsg).build();
        } catch (SQLException e) {
            e.printStackTrace();
            responseMsg.put("msg", e.getMessage());
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
