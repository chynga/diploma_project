package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.services.AppointmentService;
import com.example.backend_with_jaxrs.utils.CustomException;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/appointments")
public class AppointmentController {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAppointments() throws CustomException {
        ArrayList<Appointment> appointments = AppointmentService.getInstance().getAppointments();
        return Response.ok().entity(appointments).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response requestAppointment(Appointment appointment, @Context UriInfo uriInfo) throws CustomException {
        Appointment createdAppointment = AppointmentService.getInstance().makeAppointment(appointment);
        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        return Response.created(uriBuilder.build()).entity(createdAppointment).build();
    }

    @PATCH
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateAppointment(@PathParam("id") int id, Appointment appointment) throws CustomException {
        appointment.setId(id);
        Appointment updatedAppointment = AppointmentService.getInstance().updateAppointment(appointment);
        return Response.ok().entity(updatedAppointment).build();
    }

}
