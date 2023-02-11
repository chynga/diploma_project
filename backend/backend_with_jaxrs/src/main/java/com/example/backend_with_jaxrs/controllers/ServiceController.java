package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.services.DentalServiceService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/services")
public class ServiceController {
    @Context SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showServices() throws CustomException {
        ArrayList<Service> services = DentalServiceService.getInstance().getServices();
        return Response.ok().entity(services).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getService(@PathParam("id") Long id) throws CustomException {
        Service service = DentalServiceService.getInstance().getService(id);
        return Response.ok().entity(service).build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response addService(Service service, @Context UriInfo uriInfo) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        DentalServiceService.getInstance().addService(service);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).build();
    }

    @PATCH
    @Path("/{id}")
    public Response addService(@PathParam("id") Long id, Service service) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        service.setId(id);
        DentalServiceService.getInstance().updateService(service);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteService(@PathParam("id") Long id) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        DentalServiceService.getInstance().deleteService(id);
        return Response.ok().build();
    }
}