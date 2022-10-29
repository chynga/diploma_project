package com.example.server.util;

// Class for user-defined InvalidEmailException
public class VerificationException extends Exception {
    public VerificationException(String message) {
        super(message);
    }
}
