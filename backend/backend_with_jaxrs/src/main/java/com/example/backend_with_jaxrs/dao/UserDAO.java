package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;

public class UserDAO extends GeneralDAO {
    private static UserDAO INSTANCE;

    private UserDAO() throws CustomException {
        super();
    }

    public static UserDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new UserDAO();
        }
        return INSTANCE;
    }

    public int register(User user) throws CustomException {
        String sqlScript = "INSERT INTO users (full_name, email, phone, password) " +
                "VALUES (?, ?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, user);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);
        return getUserFromDb(resultSet).getId();
    }

    private User getUserFromDb(ResultSet resultSet) throws CustomException {
        try {
            User user = new User();
            if (resultSet.next()) {
                setUserFields(resultSet, user);
            }
            return user;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_USER);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, User user) throws CustomException {
        try {
            preparedStatement.setString(1, user.getFullName());
            preparedStatement.setString(2, user.getEmail());
            preparedStatement.setString(3, user.getPhone());
            preparedStatement.setString(4, user.getPassword());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    static void setUserFields(ResultSet resultSet, User user) throws CustomException {
        try {
            user.setId(resultSet.getInt("id"));
            user.setFullName(resultSet.getString("full_name"));
            user.setEmail(resultSet.getString("email"));
            user.setPhone(resultSet.getString("phone"));
            user.setPassword(resultSet.getString("password"));
            user.setRecoveryCode(resultSet.getString("recovery_code"));
            user.setRecoveryCodeSentTime(resultSet.getDate("recovery_code_sent_time"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_USER_FIELDS);
        }
    }
}
