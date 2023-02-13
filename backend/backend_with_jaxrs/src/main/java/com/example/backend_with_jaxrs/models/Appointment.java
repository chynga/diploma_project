package com.example.backend_with_jaxrs.models;

import java.sql.Timestamp;

public class Appointment {
    private Long id;
    private Long doctorId;
    private User doctor;
    private Long clientId;
    private User client;
    private Long serviceId;
    private Service service;
    private String status;
    private Timestamp approvedTime;
    private Timestamp requestedTime;
    private Integer durationMin;
    private Integer cost;
    private Boolean confirmed;
    private String clientMessage;

    public Appointment() {}

    public Appointment(Long doctorId, Long clientId, Long serviceId, String status, String clientMessage) {
        this.doctorId = doctorId;
        this.clientId = clientId;
        this.serviceId = serviceId;
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

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
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

    public Integer getDurationMin() {
        return durationMin;
    }

    public void setDurationMin(Integer durationMin) {
        this.durationMin = durationMin;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public Boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }

    public String getClientMessage() {
        return clientMessage;
    }

    public void setClientMessage(String clientMessage) {
        this.clientMessage = clientMessage;
    }
}
