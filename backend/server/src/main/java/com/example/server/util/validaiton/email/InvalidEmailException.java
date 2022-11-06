package com.example.server.util.validaiton.email;

// Class for user-defined InvalidEmailException
public class InvalidEmailException extends Exception {
    public InvalidEmailException(String message) {
        super(message);
    }
}
