package com.example.backend_with_jaxrs.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.backend_with_jaxrs.models.JwtToken;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.Client;
import com.example.backend_with_jaxrs.services.ClientService;
import com.example.backend_with_jaxrs.services.RoleService;
import com.example.backend_with_jaxrs.services.UserService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;
import java.util.Date;

@Path("/authentication")
@PermitAll
public class AuthenticationController {
    private static Algorithm algorithm = Algorithm.HMAC256("secret");

    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response register(User user, @Context UriInfo uriInfo) throws CustomException {
        Client createdClient = ClientService.getInstance().register(user);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        JwtToken token = new JwtToken(getToken(createdClient));

        return Response.created(uriBuilder.build()).entity(token).build();
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(User userCredentials) throws CustomException {
        ArrayList<String> userRoles = RoleService.getInstance().getUserRoles(userCredentials);
        User user;
        if (userRoles.contains("CLIENT")) {
            user = ClientService.getInstance().login(userCredentials);
        }
        else {
            user = UserService.getInstance().login(userCredentials);
        }
        JwtToken token = new JwtToken(getToken(user));

        return Response.ok().entity(token).build();
    }

    private String getToken(User user) {
        ArrayList<String> roleNames = new ArrayList<>();
        user.getRoles().forEach(role -> roleNames.add(role));
        return JWT.create()
                .withClaim("id", user.getId())
                .withClaim("fullName", user.getFullName())
                .withClaim("email", user.getEmail())
                .withClaim("phone", user.getPhone())
                .withClaim("roles", roleNames)
                .withExpiresAt(new Date(new Date().getTime() + (1000 * 60 * 60 * 24)))
                .sign(algorithm);
    }
}
