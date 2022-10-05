package com.example.server.dao;

import com.example.server.model.User;
import com.example.server.service.UserService;

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

    public void registerUser(User user) {
        System.out.println("UserDAO: " + user);
        try (Connection connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword)) {

            System.out.println("UserDAO: " + "Connected to PostgreSQL database!");
            String sql = " INSERT INTO users (name, surname, email, phone, password)" +
                    "VALUES (?, ?, ?, ?, ?)";

            PreparedStatement preparedStmt = connection.prepareStatement(sql);
            preparedStmt.setString(1, user.getName());
            preparedStmt.setString(2, user.getSurname());
            preparedStmt.setString(3, user.getEmail());
            preparedStmt.setString(4, user.getPhone());
            preparedStmt.setString(5, user.getPassword());
            preparedStmt.execute();
        } catch (SQLException e) {
            System.out.println("UserDAO: " + "Connection failure.");
            e.printStackTrace();
        }
    }
}

//    public void registerUser(User user) {
//        try (Connection connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword)) {
//
//            System.out.println("Connected to PostgreSQL database!");
//            Statement statement = connection.createStatement();
//
//            ResultSet resultSet = statement.executeQuery("SELECT * FROM users");
//            while (resultSet.next()) {
//                System.out.printf("%-30.30s  %-30.30s%n", resultSet.getString("email"), resultSet.getString("password"));
//            }
//
//        } /*catch (ClassNotFoundException e) {
//            System.out.println("PostgreSQL JDBC driver not found.");
//            e.printStackTrace();
//        }*/ catch (SQLException e) {
//            System.out.println("Connection failure.");
//            e.printStackTrace();
//        }
//    }