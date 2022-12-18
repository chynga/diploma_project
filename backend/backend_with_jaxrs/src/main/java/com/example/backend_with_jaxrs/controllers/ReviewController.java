package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.services.ReviewService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/reviews")
public class ReviewController {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response requestAppointment(Review review, @Context UriInfo uriInfo) throws CustomException {
        Review createdReview = ReviewService.getInstance().writeReview(review);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).entity(createdReview).build();
    }
}
