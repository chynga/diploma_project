package com.example.backend_with_jaxrs.utils.enums;

import com.example.backend_with_jaxrs.utils.ErrorCode;

public enum Role {
    ADMIN("ADMIN"),
    DOCTOR("DOCTOR"),
    CONSULTANT("CONSULTANT"),
    CLIENT("CLIENT");

    public final String name;

    Role(String name) {
        this.name = name;
    }
}