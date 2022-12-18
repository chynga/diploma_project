package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.utils.Secured;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/test")
public class TestController {
//    @Secured
    @RolesAllowed("CLIENT")
    @GET
    public Response helloWorld() {
        return Response.ok("hello world").build();
    }
}
