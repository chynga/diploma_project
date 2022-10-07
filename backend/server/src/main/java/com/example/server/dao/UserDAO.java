package com.example.server.dao;

import com.example.server.model.User;

import java.sql.*;

public class UserDAO {

    private static UserDAO INSTANCE;

    private UserDAO() {}

    public static UserDAO getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new UserDAO();
        }

        return INSTANCE;
    }

    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    public void registerAndSetDefaults(User user) throws SQLException {
        Connection connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);

        String sql = " INSERT INTO users (name, surname, email, phone, password)" +
                "VALUES (?, ?, ?, ?, ?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, user.getName());
        preparedStmt.setString(2, user.getSurname());
        preparedStmt.setString(3, user.getEmail());
        preparedStmt.setString(4, user.getPhone());
        preparedStmt.setString(5, user.getPassword());
        int affectedRows = preparedStmt.executeUpdate();
        if (affectedRows == 0) {
            throw new SQLException("Creating user failed, no rows affected.");
        }

        ResultSet generatedKeys = preparedStmt.getGeneratedKeys();

        if (generatedKeys.next()) {
            user.setId(generatedKeys.getInt("id"));
            user.setRole(generatedKeys.getString("role"));
        }
        else {
            throw new SQLException("Creating user failed, no ID obtained.");
        }
    }
}
