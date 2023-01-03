package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.AppointmentService;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/profile")
public class ProfileController {
    @Context
    SecurityContext securityContext;

    @GET
    @Path("/appointments")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getClientAppointments(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getClientId(authorizationHeader);
        ArrayList<Appointment> appointments = AppointmentService.getInstance().getClientAppointments(clientId);

        return Response.ok().entity(appointments).build();
    }

    @POST
    @Path("/appointments")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response requestAppointment(Appointment appointment,
                                       @HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                       @Context UriInfo uriInfo) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getClientId(authorizationHeader);
        appointment.setClientId(clientId);
        AppointmentService.getInstance().requestAppointment(appointment);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();

        return Response.created(uriBuilder.build()).build();
    }

    @GET
    @Path("/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getClientId(authorizationHeader);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }

    private Long getClientId(String authorizationHeader) throws CustomException {
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        return Jwt.getUserId(token);
    }
}
