package com.example.backend_with_jaxrs.utils;

public class ErrorCode {
    private String message;
    public static final ErrorCode INVALID_PASSWORD = new ErrorCode("INVALID_PASSWORD");
    public static final ErrorCode ROLES_NOT_FOUND = new ErrorCode("ROLES_NOT_FOUND");
    public static final ErrorCode NOT_AUTHORIZED = new ErrorCode("NOT_AUTHORIZED");
    public static final ErrorCode CAN_NOT_ASSIGN_CLIENT_ROLE = new ErrorCode("CAN_NOT_ASSIGN_CLIENT_ROLE");

    public static final ErrorCode SEND_EMAIL = new ErrorCode("SEND_EMAIL");
    public static final ErrorCode INVALID_VERIFICATION_CODE = new ErrorCode("INVALID_VERIFICATION_CODE");
    public static final ErrorCode INVALID_RECOVERY_CODE = new ErrorCode("INVALID_RECOVERY_CODE");

    public static final ErrorCode NOT_ALLOWED_ROLE_IN_CHAT = new ErrorCode("NOT_ALLOWED_ROLE_IN_CHAT");
    public static final ErrorCode MESSAGE_SENDING = new ErrorCode("MESSAGE_SENDING");
    public static final ErrorCode SQL_GET_MESSAGES = new ErrorCode("SQL_GET_MESSAGES");
    public static final ErrorCode SQL_SET_MESSAGE_FIELDS = new ErrorCode("SQL_SET_MESSAGE_FIELDS");
    public static final ErrorCode SQL_MESSAGE_NOT_FOUND = new ErrorCode("SQL_MESSAGE_NOT_FOUND");

    public static final ErrorCode SQL_CONNECTION = new ErrorCode("SQL_CONNECTION");
    public static final ErrorCode SQL_GET_PREPARED_STATEMENT = new ErrorCode("SQL_GET_PREPARED_STATEMENT");
    public static final ErrorCode SQL_SET_SCRIPT_DATA = new ErrorCode("SQL_SET_SCRIPT_DATA");
    public static final ErrorCode SQL_EXECUTE = new ErrorCode("SQL_EXECUTE");
    public static final ErrorCode SQL_EXECUTE_UPDATE = new ErrorCode("SQL_EXECUTE_UPDATE");
    public static final ErrorCode SQL_GET_RESULT_SET = new ErrorCode("SQL_GET_RESULT_SET");
    public static final ErrorCode SQL_EXECUTE_QUERY = new ErrorCode("SQL_EXECUTE_QUERY");
    public static final ErrorCode SQL_NO_ROWS_AFFECTED = new ErrorCode("SQL_NO_ROWS_AFFECTED");

    public static final ErrorCode SQL_GET_APPOINTMENT = new ErrorCode("SQL_GET_APPOINTMENT");
    public static final ErrorCode SQL_GET_APPOINTMENTS = new ErrorCode("SQL_GET_APPOINTMENTS");
    public static final ErrorCode SQL_SET_APPOINTMENT_FIELDS = new ErrorCode("SQL_SET_APPOINTMENT_FIELDS");
    public static final ErrorCode SQL_APPOINTMENT_NOT_FOUND = new ErrorCode("SQL_APPOINTMENT_NOT_FOUND");

    public static final ErrorCode SQL_GET_SERVICES = new ErrorCode("SQL_GET_SERVICES");
    public static final ErrorCode SQL_SET_SERVICE_FIELDS = new ErrorCode("SQL_SET_SERVICE_FIELDS");

    public static final ErrorCode SQL_SET_REVIEW_FIELDS = new ErrorCode("SQL_SET_REVIEW_FIELDS");
    public static final ErrorCode SQL_GET_REVIEW = new ErrorCode("SQL_GET_REVIEW");
    public static final ErrorCode SQL_REVIEW_NOT_FOUND = new ErrorCode("SQL_REVIEW_NOT_FOUND");

    public static final ErrorCode SQL_GET_USER = new ErrorCode("SQL_GET_USER");
    public static final ErrorCode SQL_SET_USER_FIELDS = new ErrorCode("SQL_SET_USER_FIELDS");
    public static final ErrorCode SQL_GET_ROLES_FOR_USER = new ErrorCode("SQL_GET_ROLES_FOR_USER");
    public static final ErrorCode SQL_GET_ROLE_NAME = new ErrorCode("SQL_GET_ROLE_NAME");
    public static final ErrorCode SQL_USER_NOT_FOUND = new ErrorCode("SQL_USER_NOT_FOUND");

    public static final ErrorCode SQL_GET_CLIENT = new ErrorCode("SQL_GET_CLIENT");
    public static final ErrorCode SQL_SET_CLIENT_FIELDS = new ErrorCode("SQL_SET_CLIENT_FIELDS");
    public static final ErrorCode SQL_CLIENT_NOT_FOUND = new ErrorCode("SQL_CLIENT_NOT_FOUND");

    public static final ErrorCode SQL_CREDENTIALS_NOT_FOUND = new ErrorCode("SQL_CREDENTIALS_NOT_FOUND");
    public static final ErrorCode SQL_GET_CREDENTIALS = new ErrorCode("SQL_GET_CREDENTIALS");

    public static final ErrorCode SQL_GET_BRUSH_SESSIONS = new ErrorCode("SQL_GET_BRUSH_SESSIONS");
    public static final ErrorCode SQL_SET_BRUSH_SESSION_FIELDS = new ErrorCode("SQL_SET_BRUSH_SESSION_FIELDS");

    public static final ErrorCode SQL_GET_DOCTORS = new ErrorCode("SQL_GET_DOCTORS");
    public static final ErrorCode SQL_SET_DOCTOR_FIELDS = new ErrorCode("SQL_SET_DOCTOR_FIELDS");
    public static final ErrorCode SQL_GET_DOCTOR = new ErrorCode("SQL_GET_DOCTOR");

    public ErrorCode() {
        this.message = "SQL error";
    }

    public ErrorCode(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
