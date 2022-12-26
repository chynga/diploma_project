package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.utils.Email;

import javax.annotation.security.DenyAll;
import javax.mail.MessagingException;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/email")
public class EmailController {
    @Context SecurityContext securityContext;
    @GET
    @DenyAll()
    @Produces(MediaType.APPLICATION_JSON)
    public Response requestAppointment() throws MessagingException {
        System.out.println(securityContext.getUserPrincipal().getName());
        System.out.println(securityContext.isUserInRole("CLIENT"));
        Email.sendVerificationCode("chynga2002@gmail.com", "sdf", "fasdfadsfasf");
        return Response.ok().build();
    }
}
