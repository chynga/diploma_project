package com.example.backend_with_jaxrs.models;

import com.example.backend_with_jaxrs.utils.ErrorCode;

public enum Role {
    CLIENT("CLIENT"),
    ADMIN("ADMIN"),
    DOCTOR("DOCTOR");

    public final String name;

    private Role(String name) {
        this.name = name;
    }
}