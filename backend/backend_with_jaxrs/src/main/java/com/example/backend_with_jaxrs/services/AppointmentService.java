package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.dao.DoctorDAO;
import com.example.backend_with_jaxrs.dao.ServiceDAO;
import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.models.User;
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
        ArrayList<Appointment> appointments = AppointmentDAO.getInstance().getAllAppointments();
        setObjectFields(appointments);

        return appointments;
    }


    public Appointment getAppointment(Long id) throws CustomException {
        Appointment appointment = AppointmentDAO.getInstance().getAppointment(id);
        setObjectField(appointment);

        return appointment;
    }

    public ArrayList<Appointment> getStatusAppointments(String status) throws CustomException {
        ArrayList<Appointment> appointments = AppointmentDAO.getInstance().getStatusAppointments(status);
        setObjectFields(appointments);

        return appointments;    }

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

    private void setObjectFields(ArrayList<Appointment> appointments) {
        for (Appointment appointment : appointments) {
            setObjectField(appointment);
        }
    }

    private void setObjectField(Appointment appointment) {
        User doctor;
        User client;
        Service service;
        try {
            doctor = UserDAO.getInstance().getUserById(appointment.getDoctorId());
            appointment.setDoctor(doctor);
        } catch (CustomException e) {}
        try {
            client = UserDAO.getInstance().getUserById(appointment.getClientId());
            appointment.setClient(client);
        } catch (CustomException e) {}
        try {
            service = ServiceDAO.getInstance().getService(appointment.getServiceId());
            appointment.setService(service);
        } catch (CustomException e) {}
    }
}
