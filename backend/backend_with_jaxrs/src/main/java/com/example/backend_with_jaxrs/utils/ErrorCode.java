package com.example.backend_with_jaxrs.utils;

public class ErrorCode {
    private String message;
    public static final ErrorCode SQL = new ErrorCode();
    public static final ErrorCode SQL_CONNECTION = new ErrorCode("SQL_CONNECTION");
    public static final ErrorCode SQL_GET_PREPARED_STATEMENT = new ErrorCode("SQL_GET_PREPARED_STATEMENT");
    public static final ErrorCode SQL_SET_SCRIPT_DATA = new ErrorCode("SQL_SET_SCRIPT_DATA");
    public static final ErrorCode SQL_EXECUTE_STATEMENT = new ErrorCode("SQL_EXECUTE_STATEMENT");
    public static final ErrorCode SQL_GET_RESULT_SET = new ErrorCode("SQL_GET_RESULT_SET");
    public static final ErrorCode SQL_EXECUTE_QUERY = new ErrorCode("SQL_EXECUTE_QUERY");
    public static final ErrorCode SQL_NO_ROWS_AFFECTED = new ErrorCode("Creating appointment failed, no rows affected.");

    public static final ErrorCode SQL_GET_APPOINTMENT = new ErrorCode("SQL_GET_APPOINTMENT");
    public static final ErrorCode SQL_GET_APPOINTMENTS = new ErrorCode("SQL_GET_APPOINTMENTS");
    public static final ErrorCode SQL_SET_APPOINTMENT_FIELDS = new ErrorCode("SQL_SET_APPOINTMENT_FIELDS");

    public static final ErrorCode SQL_GET_SERVICES = new ErrorCode("SQL_GET_SERVICES");
    public static final ErrorCode SQL_SET_SERVICE_FIELDS = new ErrorCode("SQL_SET_SERVICE_FIELDS");

    public static final ErrorCode SQL_SET_REVIEW_FIELDS = new ErrorCode("SQL_SET_REVIEW_FIELDS");

    public static final ErrorCode SQL_GET_USER = new ErrorCode("SQL_GET_USER");
    public static final ErrorCode SQL_SET_USER_FIELDS = new ErrorCode("SQL_SET_USER_FIELDS");
    public static final ErrorCode SQL_GET_ROLES_FOR_USER = new ErrorCode("SQL_GET_ROLES_FOR_USER");
    public static final ErrorCode SQL_SET_ROLE_FIELDS = new ErrorCode("SQL_SET_ROLE_FIELDS");

    public static final ErrorCode SQL_GET_CLIENT = new ErrorCode("SQL_GET_CLIENT");
    public static final ErrorCode SQL_SET_CLIENT_FIELDS = new ErrorCode("SQL_SET_CLIENT_FIELDS");

    public static final ErrorCode SQL_GET_DOCTORS = new ErrorCode("SQL_GET_DOCTORS");
    public static final ErrorCode SQL_SET_DOCTOR_FIELDS = new ErrorCode("SQL_SET_DOCTOR_FIELDS");

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
