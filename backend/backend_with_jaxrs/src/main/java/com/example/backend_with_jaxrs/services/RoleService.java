package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.RoleDAO;
import com.example.backend_with_jaxrs.models.Role;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.util.ArrayList;

public class RoleService {
    private static RoleService INSTANCE;

    private RoleService() {}

    public static RoleService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new RoleService();
        }

        return INSTANCE;
    }

    public ArrayList<String> getUserRoles(User user) throws CustomException {
        ArrayList<String> roles;
        if (user.getId() != 0) {
            roles = RoleDAO.getInstance().getRolesById(user);
        } else if (user.getEmail() != null) {
            roles = RoleDAO.getInstance().getRolesByEmail(user);
        } else {
            throw new CustomException(ErrorCode.ROLES_NOT_FOUND);
        }

        return roles;
    }

    public void addRoleToUser(User user, Role role) throws CustomException {
        RoleDAO.getInstance().addRoleToUser(user, role);
    }
}
