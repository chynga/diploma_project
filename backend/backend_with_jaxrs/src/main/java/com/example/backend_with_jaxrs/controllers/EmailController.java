package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.utils.Email;

import javax.mail.MessagingException;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/email")
public class EmailController {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response requestAppointment() throws MessagingException {
        Email.sendVerificationCode("chynga2002@gmail.com", "sdf", "fasdfadsfasf");
        return Response.ok().build();
    }
}
