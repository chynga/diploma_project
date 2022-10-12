package com.example.server.dao;

import com.example.server.model.User;

import java.sql.*;

public class UserDAO {

    private static UserDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private UserDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static UserDAO getInstance() throws SQLException {
        if(INSTANCE == null) {
            INSTANCE = new UserDAO();
        }

        return INSTANCE;
    }

    public void registerAndSetDefaults(User user) throws SQLException {
        String sql = "INSERT INTO users (firstname, lastname, email, phone, password)" +
                "VALUES (?, ?, ?, ?, ?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, user.getFirstName());
        preparedStmt.setString(2, user.getLastName());
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

    public User getUserByEmail(String email) throws SQLException {
        String sql = "SELECT * FROM users WHERE email = (?)";
        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, email);
        ResultSet rs = preparedStmt.executeQuery();
        if (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("firstname");
            String surname = rs.getString("lastname");
            String phone = rs.getString("phone");
            String password = rs.getString("password");
            String role = rs.getString("role");
            return new User(id, name, surname, email, phone, password, role);
        } else {
            throw new SQLException("Could not find user with specified email.");
        }
    }
}
