package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.dao.DoctorDAO;
import com.example.backend_with_jaxrs.models.AppointmentSession;
import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.util.ArrayList;

public class DoctorService {
    private static DoctorService INSTANCE;

    private DoctorService() {}

    public static DoctorService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new DoctorService();
        }

        return INSTANCE;
    }

    public ArrayList<Doctor> getAvailableDoctors() throws CustomException {
        return DoctorDAO.getInstance().getAvailableDoctors();
    }

    public Doctor getAvailableDoctor(Long id) throws CustomException {
        return DoctorDAO.getInstance().getAvailableDoctor(id);
    }

    public ArrayList<Doctor> getDoctors() throws CustomException {
        return DoctorDAO.getInstance().getDoctors();
    }

    public void updateDoctorInfo(Doctor doctor) throws CustomException {
        DoctorDAO.getInstance().updateDoctorInfo(doctor);
    }

    public ArrayList<AppointmentSession> getDoctorSchedule(Long doctorId) throws CustomException {
        return AppointmentDAO.getInstance().getDoctorSchedule(doctorId);
    }
}
