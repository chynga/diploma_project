//package com.example.backend_with_jaxrs.utils;
//
//import javax.ws.rs.core.Response;
//import javax.ws.rs.core.Response.Status;
//import javax.ws.rs.ext.ExceptionMapper;
//import javax.ws.rs.ext.Provider;
//
//@Provider
//public class CustomExceptionMapper implements ExceptionMapper<CustomException> {
//    @Override
//    public Response toResponse(CustomException exception) {
//        return Response.status(Status.BAD_REQUEST).entity(exception.getCode()).build();
//    }
//}