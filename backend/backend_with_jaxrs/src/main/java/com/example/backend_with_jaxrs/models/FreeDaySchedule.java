package com.example.backend_with_jaxrs.models;

import java.sql.Timestamp;

public class FreeDaySchedule {
    private Long doctorId;
    private Service service;
    private Timestamp date;

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }
}
