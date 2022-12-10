package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;
import java.util.ArrayList;

public class ServiceDAO {

    private static ServiceDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private ServiceDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static ServiceDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            try {
                INSTANCE = new ServiceDAO();
            } catch (SQLException e) {
                throw new CustomException(e, ErrorCode.SQL);
            }
        }

        return INSTANCE;
    }

    public ArrayList<Service> getServices() throws CustomException {
        try {
            String sql = "SELECT * FROM services";
            PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ResultSet rs = preparedStmt.executeQuery();
            ArrayList<Service> services = new ArrayList<>();
            while (rs.next()) {
                String title = rs.getString("title");
                String approxTimeMin = rs.getString("approx_time_min");
                String approxCost = rs.getString("approx_cost");

                services.add(new Service(title, approxTimeMin, approxCost));
            }

            return services;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }
}
