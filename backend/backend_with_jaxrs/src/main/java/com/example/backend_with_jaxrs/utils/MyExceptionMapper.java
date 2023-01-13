package com.example.backend_with_jaxrs.utils;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class MyExceptionMapper implements ExceptionMapper<Exception> {
    @Override
    public Response toResponse(Exception exception) {
        System.out.println(exception);
        return Response.status(Status.BAD_REQUEST).entity(exception.getMessage()).build();
    }
}
