package com.example.backend_with_jaxrs.utils.enums;

import com.example.backend_with_jaxrs.utils.ErrorCode;

public enum Role {
    ADMIN("ADMIN"),
    MANAGER("MANAGER"),
    DOCTOR("DOCTOR"),
    RECEPTION("RECEPTION"),
    CONSULTANT("CONSULTANT"),
    CLIENT("CLIENT");

    public final String name;

    Role(String name) {
        this.name = name;
    }
}