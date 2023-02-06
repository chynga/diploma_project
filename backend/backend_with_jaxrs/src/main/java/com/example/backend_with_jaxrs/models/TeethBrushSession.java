package com.example.backend_with_jaxrs.models;

import java.sql.Timestamp;

public class TeethBrushSession {
    private Long id;
    private Long clientId;
    private Timestamp teethBrushedTime;
    private Integer durationInSeconds;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Timestamp getTeethBrushedTime() {
        return teethBrushedTime;
    }

    public void setTeethBrushedTime(Timestamp teethBrushedTime) {
        this.teethBrushedTime = teethBrushedTime;
    }

    public Integer getDurationInSeconds() {
        return durationInSeconds;
    }

    public void setDurationInSeconds(Integer durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
    }
}
