package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.util.ArrayList;

@Path("/clients")
public class ClientController {
    @Context SecurityContext securityContext;

    @GET
    @Path("/{clientId}/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@PathParam("clientId") Long clientId) throws CustomException {
        if (!securityContext.isUserInRole(Role.CONSULTANT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }
}
