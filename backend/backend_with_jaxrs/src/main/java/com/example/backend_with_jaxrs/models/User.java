package com.example.backend_with_jaxrs.models;

import java.sql.Date;
import java.util.ArrayList;

public class User {
    private Integer id;
    private String fullName;
    private String email;
    private String phone;
    private String password;
    private String recoveryCode;
    private Date recoveryCodeSentTime;
    private ArrayList<String> roles;

    public User() {
    }

    public User(int id) {
        this.id = id;
    }

    public User(String email) {
        this.email = email;
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

    public Integer getId() {
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

    public ArrayList<String> getRoles() {
        return roles;
    }

    public void setRoles(ArrayList<String> roles) {
        this.roles = roles;
    }
}
