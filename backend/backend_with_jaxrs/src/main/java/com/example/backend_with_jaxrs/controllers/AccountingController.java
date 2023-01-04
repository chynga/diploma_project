package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.accounting.MonthlyReport;
import com.example.backend_with_jaxrs.services.AccountingService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/accounting")
public class AccountingController {
    @Context SecurityContext securityContext;

    @GET
    @Path("{month}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllAppointments(@PathParam("month") Integer month) throws CustomException {
        if (!securityContext.isUserInRole(Role.MANAGER.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        MonthlyReport monthlyReport = AccountingService.getInstance().getMonthlyReport(month);

        return Response.ok().entity(monthlyReport).build();
    }
}
