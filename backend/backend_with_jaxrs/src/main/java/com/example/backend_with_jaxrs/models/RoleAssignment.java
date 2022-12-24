package com.example.backend_with_jaxrs.models;

import java.util.ArrayList;

public class RoleAssignment {
    private Integer userId;
    private ArrayList<String> roles;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public ArrayList<String> getRoles() {
        return roles;
    }

    public void setRoles(ArrayList<String> roles) {
        this.roles = roles;
    }
}
