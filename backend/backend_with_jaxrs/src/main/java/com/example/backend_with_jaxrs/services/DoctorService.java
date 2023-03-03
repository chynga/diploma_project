package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.dao.CertificateDAO;
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
        ArrayList<Doctor> doctors = DoctorDAO.getInstance().getAvailableDoctors();
        setCertificatesForDoctors(doctors);

        return doctors;
    }

    public Doctor getAvailableDoctor(Long id) throws CustomException {
        Doctor doctor = DoctorDAO.getInstance().getAvailableDoctor(id);
        setCertificatesForDoctor(doctor);

        return doctor;
    }

    public ArrayList<Doctor> getDoctors() throws CustomException {
        ArrayList<Doctor> doctors = DoctorDAO.getInstance().getDoctors();
        setCertificatesForDoctors(doctors);

        return doctors;
    }

    public void updateDoctorInfo(Doctor doctor) throws CustomException {
        DoctorDAO.getInstance().updateDoctorInfo(doctor);
        CertificateDAO.getInstance().removeCertificatesByDoctorId(doctor.getId());
        CertificateDAO.getInstance().addCertificatesToDoctor(doctor);
    }

    public ArrayList<AppointmentSession> getDoctorSchedule(Long doctorId) throws CustomException {
        return AppointmentDAO.getInstance().getDoctorSchedule(doctorId);
    }

    private void setCertificatesForDoctors(ArrayList<Doctor> doctors) throws CustomException {
        for (Doctor doctor : doctors) {
            setCertificatesForDoctor(doctor);
        }
    }

    private void setCertificatesForDoctor(Doctor doctor) throws CustomException {
        ArrayList<String> certificates = CertificateDAO.getInstance().getDoctorCertificates(doctor.getId());
        doctor.setCertificates(certificates);
    }
}
