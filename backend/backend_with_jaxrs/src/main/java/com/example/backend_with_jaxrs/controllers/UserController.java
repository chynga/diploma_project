package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Client;
import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.models.PushNotificationMessage;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.services.ClientService;
import com.example.backend_with_jaxrs.services.DoctorService;
import com.example.backend_with_jaxrs.services.UserService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/users")
public class UserController {
    @Context SecurityContext securityContext;

    @GET
    @Path("/clients")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getClients() throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<User> clients = UserService.getInstance().getClients();

        return Response.ok().entity(clients).build();
    }

    @GET
    @Path("/clients/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getClient(@PathParam("id") Long id) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name) && !securityContext.isUserInRole(Role.DOCTOR.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Client client = ClientService.getInstance().getClient(id);

        return Response.ok().entity(client).build();
    }

    @PATCH
    @Path("/clients/{id}/healthInfo")
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateClientHealthInfo(@PathParam("id") Long id, Client client) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name) && !securityContext.isUserInRole(Role.DOCTOR.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        client.setId(id);
        ClientService.getInstance().updateClientHealthInfo(client);

        return Response.ok().build();
    }

    @POST
    @Path("/clients/{id}/notify")
    @Produces(MediaType.APPLICATION_JSON)
    public Response sendNotificationToClient(@PathParam("id") Long id, PushNotificationMessage message) throws CustomException, FirebaseMessagingException {
        if (securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        String registrationToken = ClientService.getInstance().getNotificationToken(id);
        com.google.firebase.messaging.Message msg = com.google.firebase.messaging.Message.builder()
                .setToken(registrationToken)
                .putData("body", message.getBody())
                .build();
        FirebaseMessaging.getInstance().send(msg);

        return Response.accepted().build();
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

    @GET
    @Path("/doctors")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDoctors() throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Doctor> doctors = DoctorService.getInstance().getDoctors();
        return Response.ok().entity(doctors).build();
    }

    @PATCH
    @Path("/doctors/{id}")
    public Response updateDoctorInfo(@PathParam("id") Long id, Doctor doctor) throws CustomException {
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        doctor.setId(id);
        DoctorService.getInstance().updateDoctorInfo(doctor);

        return Response.ok().build();
    }
}
