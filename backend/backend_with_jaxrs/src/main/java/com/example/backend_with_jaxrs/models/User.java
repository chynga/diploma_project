package com.example.backend_with_jaxrs.models;

import java.sql.Date;

public class User {
    // common fields
    private int id;
    private String fullName;
    private String email;
    private String phone;
    private String password;
    private String recoveryCode;
    private Date recoveryCodeSentTime;

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

    public User() {
    }

    public User(int id, String fullName, String email, String phone, String password, String recoveryCode, Date recoveryCodeSentTime) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.recoveryCode = recoveryCode;
        this.recoveryCodeSentTime = recoveryCodeSentTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRecoveryCode() {
        return recoveryCode;
    }

    public void setRecoveryCode(String recoveryCode) {
        this.recoveryCode = recoveryCode;
    }

    public Date getRecoveryCodeSentTime() {
        return recoveryCodeSentTime;
    }

    public void setRecoveryCodeSentTime(Date recoveryCodeSentTime) {
        this.recoveryCodeSentTime = recoveryCodeSentTime;
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
