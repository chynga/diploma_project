package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.*;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.services.*;
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
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProfileInfo(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        Long userId = getUserId(authorizationHeader);
        User user = UserService.getInstance().getProfileInfo(userId);

        return Response.ok().entity(user).build();
    }

    @GET
    @Path("/healthInfo")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getHealthInfo(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long userId = getUserId(authorizationHeader);
        Client client = ClientService.getInstance().getClient(userId);

        return Response.ok().entity(client).build();
    }

    @PATCH
    public Response updateProfileInfo(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                      User user) throws CustomException {
        Long userId = getUserId(authorizationHeader);
        user.setId(userId);
        UserService.getInstance().updateUserInfo(user);

        return Response.ok().build();
    }

    @GET
    @Path("/brush-sessions")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getBrushSessions(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getUserId(authorizationHeader);
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
        Long clientId = getUserId(authorizationHeader);
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
        Long clientId = getUserId(authorizationHeader);
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
        Long clientId = getUserId(authorizationHeader);
        appointment.setClientId(clientId);
        Appointment createdAppointment = AppointmentService.getInstance().requestAppointment(appointment);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();

        return Response.created(uriBuilder.build()).entity(createdAppointment).build();
    }

    @GET
    @Path("/messages")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMessages(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getUserId(authorizationHeader);
        ArrayList<Message> messages = MessageService.getInstance().getMessages(clientId);

        return Response.ok().entity(messages).build();
    }

    @POST
    @Path("/notifications/subscribe")
    public Response subscribeToNotifications(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                             PushNotificationCredentials credentials) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        Long clientId = getUserId(authorizationHeader);
        credentials.setClientId(clientId);
        ClientService.getInstance().subscribeToNotifications(credentials);

        return Response.ok().build();
    }

    private Long getUserId(String authorizationHeader) {
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        return Jwt.getUserId(token);
    }
}
