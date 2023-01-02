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

    private void setServiceFields(ResultSet resultSet, Service service) throws CustomException {
        try {
            service.setTitle(resultSet.getString("title"));
            service.setApproxTimeMin(resultSet.getInt("approx_time_min"));
            service.setApproxCost(resultSet.getString("approx_cost"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SERVICE_FIELDS);
        }
    }
}
