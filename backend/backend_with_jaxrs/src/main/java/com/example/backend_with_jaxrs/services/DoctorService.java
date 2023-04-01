package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.*;
import com.example.backend_with_jaxrs.models.AppointmentSession;
import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.models.FreeDaySchedule;
import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

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
        setInstitutionsForDoctors(doctors);
        setSpecialtiesForDoctors(doctors);
        setServicesForDoctors(doctors);

        return doctors;
    }

    public Doctor getAvailableDoctor(Long id) throws CustomException {
        Doctor doctor = DoctorDAO.getInstance().getAvailableDoctor(id);
        setCertificatesForDoctor(doctor);
        setInstitutionsForDoctor(doctor);
        setSpecialtiesForDoctor(doctor);
        setServicesForDoctor(doctor);

        return doctor;
    }

    public ArrayList<Doctor> getDoctors() throws CustomException {
        ArrayList<Doctor> doctors = DoctorDAO.getInstance().getDoctors();
        setCertificatesForDoctors(doctors);
        setInstitutionsForDoctors(doctors);
        setSpecialtiesForDoctors(doctors);
        setServicesForDoctors(doctors);

        return doctors;
    }

    public void updateDoctorInfo(Doctor doctor) throws CustomException {
        DoctorDAO.getInstance().updateDoctorInfo(doctor);
        CertificateDAO.getInstance().removeCertificatesByDoctorId(doctor.getId());
        CertificateDAO.getInstance().addCertificatesToDoctor(doctor);
        InstitutionDAO.getInstance().removeInstitutionsByDoctorId(doctor.getId());
        InstitutionDAO.getInstance().addInstitutionsToDoctor(doctor);
        SpecialtyDAO.getInstance().removeSpecialtiesByDoctorId(doctor.getId());
        SpecialtyDAO.getInstance().addSpecialtiesToDoctor(doctor);
        ServiceDAO.getInstance().removeServicesByDoctorId(doctor.getId());
        ServiceDAO.getInstance().addServicesToDoctor(doctor);
    }

    public ArrayList<AppointmentSession> getDoctorSchedule(Long doctorId) throws CustomException {
        return AppointmentDAO.getInstance().getDoctorSchedule(doctorId);
    }

    public ArrayList<Timestamp> getDoctorAvailability(FreeDaySchedule freeDaySchedule) throws CustomException {
        ArrayList<AppointmentSession> sessions = getDoctorSchedule(freeDaySchedule.getDoctorId());
        Service service = ServiceDAO.getInstance().getService(freeDaySchedule.getService().getId());
        freeDaySchedule.setService(service);

        ArrayList<AppointmentSession> selectedDaySessions = getSelectedDaySessions(freeDaySchedule.getDate(), sessions);
        return getFreeSlots(freeDaySchedule, selectedDaySessions);
    }

    private ArrayList<Timestamp> getFreeSlots(FreeDaySchedule freeDaySchedule, ArrayList<AppointmentSession> sessions) {
        Timestamp dayStart = new Timestamp(freeDaySchedule.getDate().getTime());
        dayStart.setHours(7);
        dayStart.setMinutes(0);
        dayStart.setSeconds(0);
        Timestamp dayEnd = new Timestamp(freeDaySchedule.getDate().getTime());
        dayEnd.setHours(18);
        dayEnd.setMinutes(0);
        dayEnd.setSeconds(0);
        AppointmentSession startSession = new AppointmentSession(dayStart, 0);
        AppointmentSession endSession = new AppointmentSession(dayEnd, 0);

        sessions.add(0, startSession);
        sessions.add(endSession);

        long minutesBetweenSessions;
        long sessionCount;
        Timestamp prevTime;
        ArrayList<Timestamp> availableDayTimes = new ArrayList<>();

        for (int i = 0; i < sessions.size() - 1; i++) {
            prevTime = sessions.get(i).getTime();
            prevTime.setTime(prevTime.getTime() + sessions.get(i).getDurationMin() * 60 * 1000);

            minutesBetweenSessions = (sessions.get(i + 1).getTime().getTime() - prevTime.getTime()) / (1000 * 60);
            sessionCount = minutesBetweenSessions / freeDaySchedule.getService().getApproxDurationMin();

            for (int j = 0; j < sessionCount; j++) {
                availableDayTimes.add(new Timestamp(prevTime.getTime()));
                prevTime.setTime(prevTime.getTime() + freeDaySchedule.getService().getApproxDurationMin() * 60 * 1000);
            }
        }

        // timeslots after current time
        Date currentDate = new Date();
        Timestamp currentTime = new Timestamp(currentDate.getTime());
        ArrayList<Timestamp> availableTimes = new ArrayList<>();
        for (Timestamp timestamp : availableDayTimes) {
            if (currentTime.getTime() < timestamp.getTime()) {
                availableTimes.add(timestamp);
            }
        }

        return availableTimes;
    }

    private ArrayList<AppointmentSession> getSelectedDaySessions(Timestamp date, ArrayList<AppointmentSession> sessions) {
        ArrayList<AppointmentSession> selectedDaySessions = new ArrayList<>();
        Calendar cal1 = Calendar.getInstance();
        Calendar cal2 = Calendar.getInstance();
        cal1.setTime(date);
        boolean sameDay = false;
        for (AppointmentSession session : sessions) {
            cal2.setTime(session.getTime());
            sameDay = cal1.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR) &&
                      cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR);
            if (sameDay) {
                selectedDaySessions.add(session);
            }
        }

        return selectedDaySessions;
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

    private void setInstitutionsForDoctors(ArrayList<Doctor> doctors) throws CustomException {
        for (Doctor doctor : doctors) {
            setInstitutionsForDoctor(doctor);
        }
    }

    private void setInstitutionsForDoctor(Doctor doctor) throws CustomException {
        ArrayList<String> institutions = InstitutionDAO.getInstance().getDoctorInstitutions(doctor.getId());
        doctor.setInstitutions(institutions);
    }

    private void setSpecialtiesForDoctors(ArrayList<Doctor> doctors) throws CustomException {
        for (Doctor doctor : doctors) {
            setSpecialtiesForDoctor(doctor);
        }
    }

    private void setSpecialtiesForDoctor(Doctor doctor) throws CustomException {
        ArrayList<String> specialties = SpecialtyDAO.getInstance().getDoctorSpecialties(doctor.getId());
        doctor.setSpecialties(specialties);
    }

    private void setServicesForDoctors(ArrayList<Doctor> doctors) throws CustomException {
        for (Doctor doctor : doctors) {
            setServicesForDoctor(doctor);
        }
    }

    private void setServicesForDoctor(Doctor doctor) throws CustomException {
        ArrayList<Service> doctorServices = ServiceDAO.getInstance().getDoctorServices(doctor.getId());
        doctor.setServices(doctorServices);
    }
}
