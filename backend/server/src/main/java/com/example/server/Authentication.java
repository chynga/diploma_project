package com.example.server;

import com.example.server.model.User;
import com.example.server.service.UserService;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

@Path("/user")
public class Authentication {
    private Map<String, String> properties = new HashMap<>();


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
        UserService.getInstance().registerUser(new User(msg.get("name"), msg.get("surname"), msg.get("email"), msg.get("phone"), msg.get("password")));

        return Response.ok().build();
    }
}
