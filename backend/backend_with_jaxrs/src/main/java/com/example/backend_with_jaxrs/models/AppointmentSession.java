package com.example.backend_with_jaxrs.models;

import java.sql.Timestamp;

public class AppointmentSession {
    private Timestamp time;
    private Integer durationMin;

    public AppointmentSession() {
    }

    public AppointmentSession(Timestamp time, Integer durationMin) {
        this.time = time;
        this.durationMin = durationMin;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public Integer getDurationMin() {
        return durationMin;
    }

    public void setDurationMin(Integer durationMin) {
        this.durationMin = durationMin;
    }

    @Override
    public String toString() {
        return "AppointmentSession{" +
                "time=" + time +
                ", durationMin=" + durationMin +
                '}';
    }
}
