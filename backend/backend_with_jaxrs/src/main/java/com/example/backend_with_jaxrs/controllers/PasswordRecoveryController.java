package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.PasswordRecovery;
import com.example.backend_with_jaxrs.services.UserService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/password")
public class PasswordRecoveryController {
    @POST
    @Path("recover")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response recoverPassword(PasswordRecovery passwordRecoveryCredentials) throws CustomException {
        UserService.getInstance().recoverPassword(passwordRecoveryCredentials);
        return Response.ok().build();
    }
}
