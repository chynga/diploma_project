package com.example.backend_with_jaxrs.models;

import java.sql.Timestamp;

public class Appointment {
    private Long id;
    private Long doctorId;
    private Long clientId;
    private String service;
    private String status;
    private Timestamp approvedTime;
    private Timestamp requestedTime;
    private Boolean confirmed;
    private String doctorNotes;
    private String clientMessage;

    public Appointment() {}

    public Appointment(Long doctorId, Long clientId, String service, String status, String clientMessage) {
        this.doctorId = doctorId;
        this.clientId = clientId;
        this.service = service;
        this.status = status;
        this.clientMessage = clientMessage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getApprovedTime() {
        return approvedTime;
    }

    public void setApprovedTime(Timestamp approvedTime) {
        this.approvedTime = approvedTime;
    }

    public Timestamp getRequestedTime() {
        return requestedTime;
    }

    public void setRequestedTime(Timestamp requestedTime) {
        this.requestedTime = requestedTime;
    }

    public Boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }

    public String getDoctorNotes() {
        return doctorNotes;
    }

    public void setDoctorNotes(String doctorNotes) {
        this.doctorNotes = doctorNotes;
    }

    public String getClientMessage() {
        return clientMessage;
    }

    public void setClientMessage(String clientMessage) {
        this.clientMessage = clientMessage;
    }
}
