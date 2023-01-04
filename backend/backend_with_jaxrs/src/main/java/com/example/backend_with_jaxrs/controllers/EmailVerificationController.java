package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.EmailVerification;
import com.example.backend_with_jaxrs.services.EmailService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.*;

@Path("/email")
public class EmailVerificationController {
    @POST
    @Path("verify")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response verifyEmail(EmailVerification emailVerification) throws CustomException {
        EmailService.getInstance().verifyEmail(emailVerification);

        return Response.ok().build();
    }
}
