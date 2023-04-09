package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.AppointmentSession;
import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.models.FreeDaySchedule;
import com.example.backend_with_jaxrs.services.AppointmentService;
import com.example.backend_with_jaxrs.services.DoctorService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.sql.Timestamp;
import java.util.ArrayList;

@Path("/doctors")
public class DoctorController {
    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showAvailableDoctors() throws CustomException {
        ArrayList<Doctor> doctors = DoctorService.getInstance().getAvailableDoctors();
        return Response.ok().entity(doctors).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAvailableDoctor(@PathParam("id") Long id) throws CustomException {
        Doctor doctor = DoctorService.getInstance().getAvailableDoctor(id);
        return Response.ok().entity(doctor).build();
    }

    @GET
    @Path("{id}/appointments/{status}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDoctorAppointments(@PathParam("id") Long id,
                                          @PathParam("status") String status) throws CustomException {
        if (!securityContext.isUserInRole(Role.DOCTOR.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        ArrayList<Appointment> appointments = AppointmentService.getInstance().getDoctorAppointments(id, status);
        return Response.ok().entity(appointments).build();
    }

    @GET
    @Path("{id}/schedule")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDoctorSchedule(@PathParam("id") Long id) throws CustomException {
        ArrayList<AppointmentSession> sessions = DoctorService.getInstance().getDoctorSchedule(id);
        return Response.ok().entity(sessions).build();
    }

    @POST
    @Path("{id}/free-slots")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDoctorSlots(@PathParam("id") Long id, FreeDaySchedule freeDaySchedule) throws CustomException {
        freeDaySchedule.setDoctorId(id);
        ArrayList<Timestamp> availableTimes = DoctorService.getInstance().getDoctorAvailability(freeDaySchedule);
        return Response.ok().entity(availableTimes).build();
    }
}
