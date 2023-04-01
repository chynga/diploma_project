package com.example.backend_with_jaxrs.models;

import java.sql.Date;

public class Client extends User {
    private String verificationCode;
    private Date verificationCodeSentTime;
    private boolean emailVerified;
    private String allergy;
    private String prescribedMedications;

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

    public String getAllergy() {
        return allergy;
    }

    public void setAllergy(String allergy) {
        this.allergy = allergy;
    }

    public String getPrescribedMedications() {
        return prescribedMedications;
    }

    public void setPrescribedMedications(String prescribedMedications) {
        this.prescribedMedications = prescribedMedications;
    }
}
