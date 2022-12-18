package com.example.backend_with_jaxrs.models;

import com.example.backend_with_jaxrs.utils.ErrorCode;

public class Role {
    private String name;
    public static final Role CLIENT = new Role("CLIENT");

    public Role() {
    }

    public Role(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
