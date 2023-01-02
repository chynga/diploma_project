package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.JwtToken;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.Client;
import com.example.backend_with_jaxrs.services.ClientService;
import com.example.backend_with_jaxrs.services.RoleService;
import com.example.backend_with_jaxrs.services.UserService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.Jwt;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/authentication")
public class AuthenticationController {
    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response register(User user, @Context UriInfo uriInfo) throws CustomException {
        Client createdClient = ClientService.getInstance().register(user);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        JwtToken token = new JwtToken(Jwt.getToken(createdClient));

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
        } else {
            user = UserService.getInstance().login(userCredentials);
        }
        JwtToken token = new JwtToken(Jwt.getToken(user));

        return Response.ok().entity(token).build();
    }
}
