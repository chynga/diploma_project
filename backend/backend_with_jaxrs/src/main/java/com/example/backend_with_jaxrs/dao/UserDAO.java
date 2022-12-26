package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.daoActions.UserAction;

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

    public Long register(User userCredentials) throws CustomException {
        String sqlScript = "INSERT INTO users (full_name, email, phone, password) " +
                "VALUES (?, ?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, userCredentials, UserAction.REGISTER);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getUserFromDb(resultSet).getId();
    }

    public User getUserById(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM users WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, new User(id), UserAction.GET_BY_ID);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getUserFromDb(resultSet);
    }


    public User getUserByEmail(String email) throws CustomException {
        String sqlScript = "SELECT * FROM users WHERE email = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, new User(email), UserAction.GET_BY_EMAIL);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getUserFromDb(resultSet);
    }

    private User getUserFromDb(ResultSet resultSet) throws CustomException {
        try {
            User user = new User();
            if (resultSet.next()) {
                setUserFields(resultSet, user);
            } else {
                throw new CustomException(ErrorCode.SQL_USER_NOT_FOUND);
            }

            return user;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_USER);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, User user, UserAction userAction) throws CustomException {
        try {
            switch (userAction) {
                case REGISTER:
                    preparedStatement.setString(1, user.getFullName());
                    preparedStatement.setString(2, user.getEmail());
                    preparedStatement.setString(3, user.getPhone());
                    preparedStatement.setString(4, user.getPassword());
                    break;
                case GET_BY_ID:
                    preparedStatement.setLong(1, user.getId());
                    break;
                case GET_BY_EMAIL:
                    preparedStatement.setString(1, user.getEmail());
                    break;
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    static void setUserFields(ResultSet resultSet, User user) throws CustomException {
        try {
            user.setId(resultSet.getLong("id"));
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
