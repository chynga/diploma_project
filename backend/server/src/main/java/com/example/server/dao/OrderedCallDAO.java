package com.example.server.dao;

import com.example.server.model.OrderedCall;

import java.sql.*;
import java.util.ArrayList;

public class OrderedCallDAO {

    private static OrderedCallDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private OrderedCallDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static OrderedCallDAO getInstance() throws SQLException {
        if(INSTANCE == null) {
            INSTANCE = new OrderedCallDAO();
        }

        return INSTANCE;
    }

    public ArrayList<OrderedCall> getOrderedCalls() throws SQLException {
        String sql = "SELECT * FROM orderedCalls";
        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        ResultSet rs = preparedStmt.executeQuery();
        ArrayList<OrderedCall> orderedCalls = new ArrayList<>();
        while (rs.next()) {
            String name = rs.getString("name");
            String phone = rs.getString("phone");

            orderedCalls.add(new OrderedCall(name, phone));
        }

        return orderedCalls;
    }

    public void addOrderedCall(OrderedCall orderedCall) throws SQLException {
        String sql = "INSERT INTO orderedCalls (name, phone)" +
                     "VALUES (?, ?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, orderedCall.getName());
        preparedStmt.setString(2, orderedCall.getPhone());
        int affectedRows = preparedStmt.executeUpdate();
        if (affectedRows == 0) {
            throw new SQLException("Creating order failed, no rows affected.");
        }
    }
}
