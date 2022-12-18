package com.example.backend_with_jaxrs.models;

public class JwtToken {
    private String accessToken;

    public JwtToken() {
    }

    public JwtToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
