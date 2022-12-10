package com.example.backend_with_jaxrs.utils;

public class CustomException extends Exception {

    private static final long serialVersionUID = 7718828512143293558L;

    private final ErrorCode code;

    public CustomException(ErrorCode code) {
        super();
        this.code = code;
    }

    public CustomException(String message, Throwable cause, ErrorCode code) {
        super(message, cause);
        this.code = code;
    }

    public CustomException(String message, ErrorCode code) {
        super(message);
        this.code = code;
    }

    public CustomException(Throwable cause, ErrorCode code) {
        super(cause);
        this.code = code;
    }

    public ErrorCode getCode() {
        return this.code;
    }
}