package com.example.backend_with_jaxrs.models;

import java.sql.Date;

public class Doctor extends User {
    private Date startedWorkingFrom;
    private boolean available;
    private int workExperience;
    private String about;

    public Doctor() {

    }

    public Doctor(int id, String fullName, String email, String phone, String password, String recoveryCode, Date recoveryCodeSentTime, Date startedWorkingFrom, boolean available, int workExperience, String about) {
        super(id, fullName, email, phone, password, recoveryCode, recoveryCodeSentTime);
        this.startedWorkingFrom = startedWorkingFrom;
        this.available = available;
        this.workExperience = workExperience;
        this.about = about;
    }

    public Date getStartedWorkingFrom() {
        return startedWorkingFrom;
    }

    public void setStartedWorkingFrom(Date startedWorkingFrom) {
        this.startedWorkingFrom = startedWorkingFrom;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public int getWorkExperience() {
        return workExperience;
    }

    public void setWorkExperience(int workExperience) {
        this.workExperience = workExperience;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
}