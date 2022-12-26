package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.RoleAssignment;
import com.example.backend_with_jaxrs.utils.enums.Role;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.daoActions.RoleAction;

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

    public ArrayList<String> getRolesById(User user) throws CustomException {
        String sqlScript = "SELECT * FROM permissions WHERE user_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, user, null, RoleAction.GET_ROLES_BY_ID);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getRolesFromDb(resultSet);
    }

    public ArrayList<String> getRolesByEmail(User user) throws CustomException {
        String sqlScript = "SELECT * FROM permissions" +
                " JOIN users ON permissions.user_id = users.id" +
                " WHERE email = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, user, null, RoleAction.GET_ROLES_BY_EMAIL);
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

    public void addRolesToUser(RoleAssignment roleAssignment) throws CustomException {
        String sqlScript = "";
        for (String role : roleAssignment.getRoles()) {
            sqlScript += "INSERT INTO permissions (user_id, role) " +
                         "VALUES (" + roleAssignment.getUserId() + ", '" + role + "');\n";
        }
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        execute(preparedStatement);
    }

    public void removeRolesByUserId(User user) throws CustomException {
        String sqlScript = "DELETE FROM permissions " +
                           "WHERE user_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, user, null, RoleAction.REMOVE_ALL_ROLES);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, User user, Role role, RoleAction roleAction) throws CustomException {
        try {
            switch (roleAction) {
                case GET_ROLES_BY_ID:
                case REMOVE_ALL_ROLES:
                    preparedStatement.setLong(1, user.getId());
                    break;
                case GET_ROLES_BY_EMAIL:
                    preparedStatement.setString(1, user.getEmail());
                    break;
                case ADD_ROLE:
                    preparedStatement.setLong(1, user.getId());
                    preparedStatement.setString(2, role.name);
                    break;
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<String> getRolesFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<String> roles = new ArrayList<>();
            while (resultSet.next()) {
                roles.add(getRoleName(resultSet));
            }

            return roles;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_ROLES_FOR_USER);
        }
    }

    private String getRoleName(ResultSet resultSet) throws CustomException {
        try {
            return resultSet.getString("role");
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_ROLE_NAME);
        }
    }
}
