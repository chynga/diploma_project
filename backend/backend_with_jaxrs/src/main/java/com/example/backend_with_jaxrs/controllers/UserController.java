package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.services.UserService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/users")
public class UserController {
    @Context SecurityContext securityContext;

    @GET
    @Path("/clients/{clientId}/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@PathParam("clientId") Long clientId) throws CustomException {
        if (!securityContext.isUserInRole(Role.CONSULTANT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }

    @POST
    @Path("/employees")
    public Response createUser(User employee, @Context UriInfo uriInfo) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        UserService.getInstance().createEmployee(employee);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();

        return Response.created(uriBuilder.build()).build();
    }

    @GET
    @Path("/employees")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getEmployees() throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<User> employees = UserService.getInstance().getEmployees();

        return Response.ok().entity(employees).build();
    }

    @GET
    @Path("/employees/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getEmployees(@PathParam("id") Long id) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        User employee = UserService.getInstance().getEmployee(id);

        return Response.ok().entity(employee).build();
    }

    @PATCH
    @Path("/employees")
    public Response createUser(User employee) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        UserService.getInstance().updateEmployee(employee);

        return Response.ok().build();
    }
}
