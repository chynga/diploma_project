package com.example.backend_with_jaxrs.utils.enums;

public enum AppointmentStatus {
    PENDING("pending"),
    APPROVED("approved"),
    SUCCESS("success"),
    CANCELLED("cancelled");

    public final String name;

    AppointmentStatus(String name) {
        this.name = name;
    }
}