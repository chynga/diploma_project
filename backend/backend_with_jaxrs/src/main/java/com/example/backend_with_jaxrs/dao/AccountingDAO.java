package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.accounting.MonthlyReport;
import com.example.backend_with_jaxrs.models.accounting.Session;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class AccountingDAO extends GeneralDAO {
    private static AccountingDAO INSTANCE;

    private AccountingDAO() throws CustomException {
        super();
    }

    public static AccountingDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new AccountingDAO();
        }

        return INSTANCE;
    }

    public MonthlyReport getMonthlyReport(Integer month) throws CustomException {
        String sqlScript = "SELECT doctor_id, service, approved_time, cost FROM appointments " +
                "WHERE EXTRACT(MONTH FROM approved_time) = (?) AND status = 'success'";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, month);
        ResultSet resultSet = executeQuery(preparedStatement);

        MonthlyReport monthlyReport = getMonthlyReportFromDb(resultSet);
        monthlyReport.setMonth(month);

        return monthlyReport;
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Integer month) throws CustomException {
        try {
            preparedStatement.setInt(1, month);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private MonthlyReport getMonthlyReportFromDb(ResultSet resultSet) throws CustomException {
        try {
            MonthlyReport monthlyReport = new MonthlyReport();
            ArrayList<Session> sessions = new ArrayList<>();
            while (resultSet.next()) {
                Session session = new Session();
                setSessionFields(resultSet, session);
                sessions.add(session);
            }
            monthlyReport.setSessions(sessions);

            return monthlyReport;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_APPOINTMENT);
        }
    }

    private void setSessionFields(ResultSet resultSet, Session session) throws CustomException {
        try {
            session.setDoctorId(resultSet.getLong("doctor_id"));
            session.setService(resultSet.getString("service"));
            session.setApprovedTime(resultSet.getTimestamp("approved_time"));
            session.setCost(resultSet.getDouble("cost"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_APPOINTMENT_FIELDS);
        }
    }
}
