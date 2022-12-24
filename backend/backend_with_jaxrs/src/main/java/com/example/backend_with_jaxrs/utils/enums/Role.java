package com.example.backend_with_jaxrs.utils.enums;

import com.example.backend_with_jaxrs.utils.ErrorCode;

public enum Role {
    ADMIN("ADMIN"),
    MANAGER("MANAGER"),
    DOCTOR("DOCTOR"),
    CONSULTANT("CONSULTANT"),
    CLIENT("CLIENT");

    public final String name;

    private Role(String name) {
        this.name = name;
    }
}