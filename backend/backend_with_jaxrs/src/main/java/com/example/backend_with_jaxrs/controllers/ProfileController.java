package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/profile")
public class ProfileController {
    @Context
    SecurityContext securityContext;

    @GET
    @Path("/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        Long clientId = Jwt.getUserId(token);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }
}
