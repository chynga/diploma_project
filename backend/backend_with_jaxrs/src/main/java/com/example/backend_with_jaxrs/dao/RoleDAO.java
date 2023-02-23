package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.RoleAssignment;
import com.example.backend_with_jaxrs.utils.enums.Role;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

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

    public ArrayList<String> getRolesById(Long userId) throws CustomException {
        String sqlScript = "SELECT * FROM permissions WHERE user_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, userId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getRolesFromDb(resultSet);
    }

    public ArrayList<String> getRolesByEmail(String email) throws CustomException {
        String sqlScript = "SELECT * FROM permissions" +
                " JOIN users ON permissions.user_id = users.id" +
                " WHERE email = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, email);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getRolesFromDb(resultSet);
    }

    public void addRoleToUser(Long userId, Role role) throws CustomException {
        String sqlScript = "INSERT INTO permissions (user_id, role) " +
                           "VALUES (?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, userId, role);
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

    public void removeRolesByUserId(Long userId) throws CustomException {
        String sqlScript = "DELETE FROM permissions " +
                           "WHERE user_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, userId);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long userId) throws CustomException {
        try {
            preparedStatement.setLong(1, userId);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, String email) throws CustomException {
        try {
            preparedStatement.setString(1, email);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long userId, Role role) throws CustomException {
        try {
            preparedStatement.setLong(1, userId);
            preparedStatement.setString(2, role.name);
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
