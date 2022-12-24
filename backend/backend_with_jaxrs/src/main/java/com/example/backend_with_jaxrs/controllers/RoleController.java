package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.RoleAssignment;
import com.example.backend_with_jaxrs.services.RoleService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;

@Path("/roles")
public class RoleController {
    @Context SecurityContext securityContext;

    @POST
    @Path("/assign")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response assignRole(RoleAssignment roleAssignment) throws CustomException {
        // TODO: log out when roles are assigned
        if (!securityContext.isUserInRole(Role.ADMIN.name)) throw new CustomException(ErrorCode.NOT_AUTHORIZED);
        RoleService.getInstance().addRolesToUser(roleAssignment);

        return Response.ok().build();
    }
}
