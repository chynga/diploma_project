package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.services.UserService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/users")
public class UserController {
    @Context SecurityContext securityContext;

    @GET
    @Path("/clients/{clientId}/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@PathParam("clientId") Long clientId) throws CustomException {
        if (!securityContext.isUserInRole(Role.CONSULTANT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }

    @POST
    public Response createUser(User user, @Context UriInfo uriInfo) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        UserService.getInstance().createUser(user);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();

        return Response.created(uriBuilder.build()).build();
    }
}
