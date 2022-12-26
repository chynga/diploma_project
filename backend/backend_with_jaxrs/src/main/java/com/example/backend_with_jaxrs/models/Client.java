package com.example.backend_with_jaxrs.models;

import java.sql.Date;

public class Client extends User {
    private String verificationCode;
    private Date verificationCodeSentTime;
    private boolean emailVerified;
    private String patientDescription;

    public Client() {

    }

    public Client(Long id) {
        super(id);
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
