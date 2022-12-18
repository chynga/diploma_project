package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.UserWithAdditionalFields;
import com.example.backend_with_jaxrs.services.ClientService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/authentication")
public class AuthenticationController {

    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response registerClient(User user, @Context UriInfo uriInfo) throws CustomException {
        UserWithAdditionalFields createdClient = ClientService.getInstance().register(user);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).entity(createdClient).build();
    }
}
