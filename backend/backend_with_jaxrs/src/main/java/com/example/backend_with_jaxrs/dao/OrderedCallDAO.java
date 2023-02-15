package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.OrderedCall;
import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class OrderedCallDAO extends GeneralDAO {
    private static OrderedCallDAO INSTANCE;

    private OrderedCallDAO() throws CustomException {
        super();
    }

    public static OrderedCallDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new OrderedCallDAO();
        }

        return INSTANCE;
    }

    public ArrayList<OrderedCall> getOrderedCalls() throws CustomException {
        String sqlScript = "SELECT * FROM ordered_calls";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getOrdersFromDb(resultSet);
    }

    public void orderCall(OrderedCall orderedCall) throws CustomException {
        String sql = "INSERT INTO ordered_calls (client_id) " +
                "VALUES (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sql);
        setSqlScriptData(preparedStatement, orderedCall);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, OrderedCall orderedCall) throws CustomException {
        try {
            preparedStatement.setLong(1, orderedCall.getClientId());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<OrderedCall> getOrdersFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<OrderedCall> orders = new ArrayList<>();
            while (resultSet.next()) {
                OrderedCall order = new OrderedCall();
                setReviewFields(resultSet, order);
                orders.add(order);
            }

            return orders;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_ORDERED_CALLS);
        }
    }

    private void setReviewFields(ResultSet resultSet, OrderedCall order) throws CustomException {
        try {
            order.setId(resultSet.getLong("id"));
            order.setClientId(resultSet.getLong("client_id"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_ORDERED_CALL_FIELDS);
        }
    }
}
