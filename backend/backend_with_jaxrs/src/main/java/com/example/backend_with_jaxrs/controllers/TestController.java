package com.example.backend_with_jaxrs.controllers;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/test")
public class TestController {
    @RolesAllowed("CLIENT")
    @GET
    public Response helloWorld() {
        return Response.ok("hello world").build();
    }
}
