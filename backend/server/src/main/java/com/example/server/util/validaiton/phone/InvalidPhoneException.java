package com.example.server.util.validaiton.phone;

// Class for user-defined InvalidPasswordException
public class InvalidPhoneException extends Exception {
    public InvalidPhoneException(String message) {
        super(message);
    }
}
