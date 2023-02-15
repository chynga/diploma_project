package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.dao.ReviewDAO;
import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.services.ReviewService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/reviews")
public class ReviewController {
    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getReviews() throws CustomException {
        ArrayList<Review> reviews = ReviewService.getInstance().getReviews();
        return Response.ok(reviews).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response requestAppointment(Review review,
                                       @Context UriInfo uriInfo,
                                       @HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader) throws CustomException {
//        if (!securityContext.isUserInRole(Role.CLIENT.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        String token = Jwt.getTokenFromHeader(authorizationHeader);
        Long clientId = Jwt.getUserId(token);
        review.setClientId(clientId);
        ReviewService.getInstance().writeReview(review);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).build();
    }
}
