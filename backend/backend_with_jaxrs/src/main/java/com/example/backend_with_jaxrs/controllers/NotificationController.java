package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Notification;
import com.example.backend_with_jaxrs.models.OrderedCall;
import com.example.backend_with_jaxrs.services.NotificationService;
import com.example.backend_with_jaxrs.services.OrderedCallService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/notifications")
public class NotificationController {
    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getClientNotifications(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        Long clientId = Jwt.getUserId(token);
        ArrayList<Notification> notifications = NotificationService.getInstance().getClientNotifications(clientId);

        return Response.ok(notifications).build();
    }

    @PATCH
    @Path("types/{type}")
    public Response readNotifications(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                      @PathParam("type") String type,
                                      Notification notification) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        Long clientId = Jwt.getUserId(token);
        NotificationService.getInstance().readNotifications(clientId, type);
        return Response.ok().build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response sendNotification(@Context UriInfo uriInfo,
                                     @HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader,
                                     Notification notification) throws CustomException {
        if (securityContext.isUserInRole(Role.CLIENT.name)) {
            String token = Jwt.getTokenFromHeader(authorizationHeader);
            Long clientId = Jwt.getUserId(token);
            notification.setClientId(clientId);
            NotificationService.getInstance().sendNotificationAsClient(notification);
        } else {
            NotificationService.getInstance().sendNotification(notification);
        }
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).build();
    }
}
