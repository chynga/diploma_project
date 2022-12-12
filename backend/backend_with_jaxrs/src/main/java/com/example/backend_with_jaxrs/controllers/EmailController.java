package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.services.AppointmentService;
import com.example.backend_with_jaxrs.services.ReviewService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.Email;

import javax.mail.MessagingException;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.sql.SQLException;
import java.util.ArrayList;

@Path("/email")
public class EmailController {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response requestAppointment() throws MessagingException {
        Email.sendVerificationCode("chynga2002@gmail.com", "sdf", "fasdfadsfasf");
        return Response.ok().build();
    }
}
