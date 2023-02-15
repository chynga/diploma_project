package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.OrderedCall;
import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.services.OrderedCallService;
import com.example.backend_with_jaxrs.services.ReviewService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/ordered-calls")
public class OrderedCallController {
    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getOrders(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<OrderedCall> orders = OrderedCallService.getInstance().getOrderedCalls();
        return Response.ok(orders).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response orderCall(@Context UriInfo uriInfo,
                              @HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        Long clientId = Jwt.getUserId(token);
        OrderedCall orderedCall = new OrderedCall();
        orderedCall.setClientId(clientId);
        OrderedCallService.getInstance().orderCall(orderedCall);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).build();
    }
}
