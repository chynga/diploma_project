package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.utils.CustomException;

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

    public ArrayList<Appointment> getAllAppointments() throws CustomException {
        return AppointmentDAO.getInstance().getAllAppointments();
    }

    public Appointment makeAppointment(Appointment appointment) throws CustomException {
        return AppointmentDAO.getInstance().makeAppointment(appointment);
    }

    public Appointment requestAppointment(Appointment appointment) throws CustomException {
        return AppointmentDAO.getInstance().requestAppointment(appointment);
    }

    public Appointment updateAppointment(Appointment appointment) throws CustomException {
        return AppointmentDAO.getInstance().updateAppointment(appointment);
    }

    public ArrayList<Appointment> getClientAppointments(Long clientId) throws CustomException {
        return AppointmentDAO.getInstance().getClientAppointments(clientId);
    }

    public Appointment deleteAppointment(Long id) throws CustomException {
        return AppointmentDAO.getInstance().deleteAppointment(id);
    }
}
