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
    private Map<String, String> properties = new HashMap<>();
    Algorithm algorithm = Algorithm.HMAC256("secret");

    @GET
    @Path("/login")
    @Produces("application/json")
    public Response login() {
        properties.put("name", "chyngys");
        properties.put("surname", "kurban");
        return Response.ok(properties).build();
    }

    @POST
    @Path("/register")
    @Consumes("application/json")
    public Response register(HashMap<String, String> msg) {
        System.out.println("Authentication: " + msg.get("name"));
        System.out.println("Authentication: " + msg.get("surname"));
        System.out.println("Authentication: " + msg.get("email"));
        System.out.println("Authentication: " + msg.get("phone"));
        System.out.println("Authentication: " + msg.get("password"));
        User user = UserService.getInstance().registerUser(new User(msg.get("name"), msg.get("surname"), msg.get("email"), msg.get("phone"), msg.get("password")));
        try {
            String token = JWT.create()
                    .withIssuer("auth0")
                    .withClaim("id", user.getId())
                    .withClaim("role", user.getRole())
                    .withExpiresAt(new Date(new Date().getTime() + (1000 * 60 * 60 * 24)))
                    .sign(algorithm);
            return Response.ok(token).build();
        } catch (JWTCreationException exception){
            //Invalid Signing configuration / Couldn't convert Claims.
            return Response.serverError().build();
        }
    }
}
