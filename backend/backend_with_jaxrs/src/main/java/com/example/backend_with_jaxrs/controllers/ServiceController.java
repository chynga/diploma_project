package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.services.DentalServiceService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/services")
public class ServiceController {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showServices() throws CustomException {
        ArrayList<Service> services = DentalServiceService.getInstance().getServices();
        return Response.ok().entity(services).build();
    }
}
