package com.example.backend_with_jaxrs.models.message;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;

public class Message {
    private Long id;
    private Long clientId;
    private Long consultantId;
    private String body;
    private Timestamp sentTime;
    @JsonProperty("isClient")
    private Boolean isClient;

    public Message() {
    }

    public Message(Long clientId) {
        this.clientId = clientId;
    }

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

    public Long getConsultantId() {
        return consultantId;
    }

    public void setConsultantId(Long consultantId) {
        this.consultantId = consultantId;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Timestamp getSentTime() {
        return sentTime;
    }

    public void setSentTime(Timestamp sentTime) {
        this.sentTime = sentTime;
    }

    public Boolean isClient() {
        return isClient;
    }

    public void setIsClient(boolean isClient) {
        this.isClient = isClient;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
