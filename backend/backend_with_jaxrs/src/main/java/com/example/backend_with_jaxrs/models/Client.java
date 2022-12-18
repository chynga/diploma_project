package com.example.backend_with_jaxrs.models;

import java.sql.Date;

public class UserWithAdditionalFields extends User {
    // doctor fields
    private Date startedWorkingFrom;
    private boolean available;
    private int workExperience;
    private String about;

    // client fields
    private String verificationCode;
    private Date verificationCodeSentTime;
    private boolean emailVerified;
    private String patientDescription;

    public UserWithAdditionalFields() {

    }

    public UserWithAdditionalFields(int id) {
        super(id);
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

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public Date getVerificationCodeSentTime() {
        return verificationCodeSentTime;
    }

    public void setVerificationCodeSentTime(Date verificationCodeSentTime) {
        this.verificationCodeSentTime = verificationCodeSentTime;
    }

    public boolean isEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public String getPatientDescription() {
        return patientDescription;
    }

    public void setPatientDescription(String patientDescription) {
        this.patientDescription = patientDescription;
    }
}
