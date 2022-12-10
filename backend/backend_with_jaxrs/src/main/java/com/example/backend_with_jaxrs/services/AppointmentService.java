package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.sql.SQLException;
import java.util.ArrayList;

public class AppointmentService {

    private static AppointmentService INSTANCE;

    private AppointmentService() {}

    public static AppointmentService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new AppointmentService();
        }

        return INSTANCE;
    }

    public ArrayList<Appointment> getAppointments() throws CustomException {
        return AppointmentDAO.getInstance().getAppointments();
    }

    public Appointment makeAppointment(Appointment appointment) throws CustomException {
        return AppointmentDAO.getInstance().makeAppointment(appointment);
    }

    public Appointment updateAppointment(Appointment appointment) throws CustomException {
        return AppointmentDAO.getInstance().updateAppointment(appointment);
    }
}
