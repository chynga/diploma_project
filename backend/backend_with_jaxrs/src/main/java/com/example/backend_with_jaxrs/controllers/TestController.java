package com.example.backend_with_jaxrs.controllers;


import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/test")
public class TestController {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response helloWorld(Integer month) {
        System.out.println(month);
        return Response.ok().build();
    }
}
