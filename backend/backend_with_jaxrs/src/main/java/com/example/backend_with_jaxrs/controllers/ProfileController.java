package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.PushNotificationCredentials;
import com.example.backend_with_jaxrs.models.TeethBrushSession;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.AppointmentService;
import com.example.backend_with_jaxrs.services.BrushSessionService;
import com.example.backend_with_jaxrs.services.ClientService;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;
import com.google.firebase.messaging.FirebaseMessaging;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/profile")
public class ProfileController {
    @Context
    SecurityContext securityContext;

    @GET
    @Path("/brush-sessions")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getBrushSessions(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getClientId(authorizationHeader);
        ArrayList<TeethBrushSession> sessions = BrushSessionService.getInstance().getBrushSessions(clientId);

        return Response.ok().entity(sessions).build();
    }

    @POST
    @Path("/brush-sessions")
    @Produces(MediaType.APPLICATION_JSON)
    public Response createBrushSession(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                       @Context UriInfo uriInfo,
                                       TeethBrushSession brushSession) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getClientId(authorizationHeader);
        brushSession.setClientId(clientId);
        BrushSessionService.getInstance().createBrushSession(brushSession);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();

        return Response.created(uriBuilder.build()).build();
    }

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

    @POST
    @Path("/notifications/subscribe")
    public Response subscribeToNotifications(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                             PushNotificationCredentials credentials) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getClientId(authorizationHeader);
        credentials.setClientId(clientId);
        ClientService.getInstance().subscribeToNotifications(credentials);

        return Response.ok().build();
    }

    private Long getClientId(String authorizationHeader) {
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        return Jwt.getUserId(token);
    }
}
