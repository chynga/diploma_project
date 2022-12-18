package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.services.DoctorService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/doctors")
public class DoctorController {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showAvailableDoctors() throws CustomException {
        ArrayList<Doctor> doctors = DoctorService.getInstance().getAvailableDoctors();
        return Response.ok().entity(doctors).build();
    }
}
