package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;

public abstract class GeneralDAO {
    private Connection connection;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    GeneralDAO() throws CustomException {
        try {
            connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
        } catch (SQLException e) {
            throw new CustomException(ErrorCode.SQL_CONNECTION);
        }
    }

    PreparedStatement getPreparedStatement(String sqlScript) throws CustomException {
        try {
            return connection.prepareStatement(sqlScript, Statement.RETURN_GENERATED_KEYS);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_PREPARED_STATEMENT);
        }
    }

    ResultSet executeQuery(PreparedStatement preparedStatement) throws CustomException {
        try {
            return preparedStatement.executeQuery();
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_EXECUTE_QUERY);
        }
    }

    int executeUpdate(PreparedStatement preparedStatement) throws CustomException {
        try {
            return preparedStatement.executeUpdate();
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_EXECUTE_UPDATE);
        }
    }

    boolean execute(PreparedStatement preparedStatement) throws CustomException {
        try {
            return preparedStatement.execute();
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_EXECUTE);
        }
    }

    ResultSet getResultSet(PreparedStatement preparedStatement) throws CustomException {
        try {
            return preparedStatement.getGeneratedKeys();
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_RESULT_SET);
        }
    }
}
