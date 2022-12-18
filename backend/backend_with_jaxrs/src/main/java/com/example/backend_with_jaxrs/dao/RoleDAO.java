package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Client;
import com.example.backend_with_jaxrs.models.Role;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.RoleAction;
import com.example.backend_with_jaxrs.utils.enums.UserAction;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class RoleDAO extends GeneralDAO {
    private static RoleDAO INSTANCE;

    private RoleDAO() throws CustomException {
        super();
    }

    public static RoleDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new RoleDAO();
        }

        return INSTANCE;
    }

    public ArrayList<Role> getRolesForUser(User user) throws CustomException {
        String sqlScript = "SELECT * FROM permissions WHERE user_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, user, null, RoleAction.GET_ROLES);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getRolesFromDb(resultSet);
    }

    public void addRoleToUser(User user, Role role) throws CustomException {
        String sqlScript = "INSERT INTO permissions (user_id, role) " +
                "VALUES (?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, user, role, RoleAction.ADD_ROLE);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, User user, Role role, RoleAction roleAction) throws CustomException {
        try {
            switch (roleAction) {
                case GET_ROLES:
                    preparedStatement.setInt(1, user.getId());
                    break;
                case ADD_ROLE:
                    preparedStatement.setInt(1, user.getId());
                    preparedStatement.setString(2, role.getName());
                    break;
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<Role> getRolesFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<Role> roles = new ArrayList<>();
            while (resultSet.next()) {
                Role role = new Role();
                setRoleFields(resultSet, role);
                roles.add(role);
            }

            return roles;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_ROLES_FOR_USER);
        }
    }

    private void setRoleFields(ResultSet resultSet, Role role) throws CustomException {
        try {
            role.setName(resultSet.getString("role"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_ROLE_FIELDS);
        }
    }
}
