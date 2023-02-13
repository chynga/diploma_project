package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;
import java.util.ArrayList;

public class ServiceDAO extends GeneralDAO {

    private static ServiceDAO INSTANCE;

    private ServiceDAO() throws CustomException {
        super();
    }

    public static ServiceDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new ServiceDAO();
        }

        return INSTANCE;
    }

    public ArrayList<Service> getServices() throws CustomException {
        String sqlScript = "SELECT * FROM services";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getServicesFromDb(resultSet);
    }

    public Service getService(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM services WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, id);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getServiceFromDb(resultSet);
    }

    public void addService(Service service) throws CustomException {
        String sqlScript = "INSERT INTO services (title, description, approx_duration_min, approx_cost, img_main_url, img_before_url, img_after_url) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, service);
        executeUpdate(preparedStatement);
    }

    public void updateService(Service service) throws CustomException {
        String sqlScript = "UPDATE services SET title = (?), " +
                "description = (?), " +
                "approx_duration_min = (?), " +
                "approx_cost = (?), " +
                "img_main_url = (?), " +
                "img_before_url = (?), " +
                "img_after_url = (?) " +
                "WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, service);
        executeUpdate(preparedStatement);
    }

    public void deleteService(Long id) throws CustomException {
        String sqlScript = "DELETE FROM services WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, id);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Service service) throws CustomException {
        try {
            preparedStatement.setString(1, service.getTitle());
            preparedStatement.setString(2, service.getDescription());
            preparedStatement.setInt(3, service.getApproxDurationMin());
            preparedStatement.setString(4, service.getApproxCost());
            preparedStatement.setString(5, service.getImgMainUrl());
            preparedStatement.setString(6, service.getImgBeforeUrl());
            preparedStatement.setString(7, service.getImgAfterUrl());
            if (service.getId() != null) {
                preparedStatement.setLong(8, service.getId());
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<Service> getServicesFromDb(ResultSet rs) throws CustomException {
        try {
            ArrayList<Service> services = new ArrayList<>();
            while (rs.next()) {
                Service service = new Service();
                setServiceFields(rs, service);
                services.add(service);
            }

            return services;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_SERVICES);
        }
    }

    private Service getServiceFromDb(ResultSet resultSet) throws CustomException {
        try {
            Service service = null;
            if (resultSet.next()) {
                service = new Service();
                setServiceFields(resultSet, service);
            }

            return service;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_SERVICES);
        }
    }

    private void setServiceFields(ResultSet resultSet, Service service) throws CustomException {
        try {
            service.setId(resultSet.getLong("id"));
            service.setTitle(resultSet.getString("title"));
            service.setDescription(resultSet.getString("description"));
            service.setApproxDurationMin(resultSet.getInt("approx_duration_min"));
            service.setApproxCost(resultSet.getString("approx_cost"));
            service.setImgMainUrl(resultSet.getString("img_main_url"));
            service.setImgBeforeUrl(resultSet.getString("img_before_url"));
            service.setImgAfterUrl(resultSet.getString("img_after_url"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SERVICE_FIELDS);
        }
    }
}
