package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.services.AppointmentService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/appointments")
public class AppointmentController {
    @Context SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllAppointments() throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Appointment> appointments = AppointmentService.getInstance().getAllAppointments();

        return Response.ok().entity(appointments).build();
    }

    @PATCH
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateAppointment(@PathParam("id") Long id, Appointment appointment) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        appointment.setId(id);
        Appointment updatedAppointment = AppointmentService.getInstance().updateAppointment(appointment);

        return Response.ok().entity(updatedAppointment).build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteAppointment(@PathParam("id") Long id) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        AppointmentService.getInstance().deleteAppointment(id);

        return Response.ok().build();
    }
}
