package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.util.ArrayList;

@Path("/consultation")
public class MessageController {
    @Context
    SecurityContext securityContext;

    @GET
    @Path("/clients")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessagedClients() throws CustomException {
        if (!securityContext.isUserInRole(Role.CONSULTANT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<User> users = MessageService.getInstance().getMessagedClients();

        return Response.ok().entity(users).build();
    }

    @GET
    @Path("/clients/{clientId}/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@PathParam("clientId") Long clientId) throws CustomException {
        if (!securityContext.isUserInRole(Role.CONSULTANT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }
}
