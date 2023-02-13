package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.daoActions.AppointmentAction;

import java.sql.*;
import java.util.ArrayList;

public class AppointmentDAO extends GeneralDAO {
    private static AppointmentDAO INSTANCE;

    private AppointmentDAO() throws CustomException {
        super();
    }

    public static AppointmentDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new AppointmentDAO();
        }

        return INSTANCE;
    }

    public Appointment makeAppointment(Appointment appointment) throws CustomException {
        String sqlScript = "INSERT INTO appointments (doctor_id, service_id, status, approved_time, duration_min, cost, confirmed) " +
                "VALUES (?, ?, 'success', ?, ?, ?, true)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, appointment, AppointmentAction.MAKE_APPOINTMENT);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    public Appointment requestAppointment(Appointment appointment) throws CustomException {
        String sqlScript = "INSERT INTO appointments (doctor_id, client_id, service_id, requested_time, client_message, status) " +
                "VALUES (?, ?, ?, ?, ?, 'pending')";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, appointment, AppointmentAction.REQUEST_APPOINTMENT);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    public ArrayList<Appointment> getClientAppointments(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM appointments WHERE client_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement,  id);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getAppointmentsFromDb(resultSet);
    }

    public ArrayList<Appointment> getAllAppointments() throws CustomException {
        String sqlScript = "SELECT * FROM appointments";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getAppointmentsFromDb(resultSet);
    }

    public Appointment getAppointment(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM appointments WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, id);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    public ArrayList<Appointment> getStatusAppointments(String status) throws CustomException {
        String sqlScript = "SELECT * FROM appointments WHERE status = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, status);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getAppointmentsFromDb(resultSet);
    }

    public Appointment updateAppointment(Appointment appointment) throws CustomException {
        String sqlScript = getSqlUpdateScript(appointment);
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    public Appointment deleteAppointment(Long id) throws CustomException {
        String sqlScript = "DELETE FROM appointments WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, id);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, String status) throws CustomException {
        try {
            preparedStatement.setString(1, status);
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

    private void setSqlScriptData(PreparedStatement preparedStatement, Appointment appointment, AppointmentAction appointmentAction) throws CustomException {
        try {
            switch (appointmentAction) {
                case MAKE_APPOINTMENT:
                    preparedStatement.setObject(1, appointment.getDoctorId(), Types.INTEGER);
                    preparedStatement.setObject(2, appointment.getServiceId(), Types.INTEGER);
                    preparedStatement.setObject(3, appointment.getApprovedTime(), Types.TIMESTAMP);
                    preparedStatement.setObject(4, appointment.getDurationMin(), Types.INTEGER);
                    preparedStatement.setObject(5,
                            appointment.getCost() != null ?
                                    appointment.getCost() :
                                    0, Types.INTEGER);
                    break;
                case REQUEST_APPOINTMENT:
                    preparedStatement.setObject(1, appointment.getDoctorId(), Types.INTEGER);
                    preparedStatement.setObject(2, appointment.getClientId(), Types.INTEGER);
                    preparedStatement.setObject(3, appointment.getServiceId(), Types.INTEGER);
                    preparedStatement.setObject(4, appointment.getRequestedTime(), Types.TIMESTAMP);
                    preparedStatement.setObject(5,
                            appointment.getClientMessage() != null ?
                                    appointment.getClientMessage() :
                                    "", Types.VARCHAR);
                    break;
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private Appointment getAppointmentFromDb(ResultSet resultSet) throws CustomException {
        try {
            Appointment appointment = new Appointment();
            if (resultSet.next()) {
                setAppointmentFields(resultSet, appointment);
            } else {
                throw new CustomException(ErrorCode.SQL_APPOINTMENT_NOT_FOUND);
            }

            return appointment;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_APPOINTMENT);
        }
    }

    private ArrayList<Appointment> getAppointmentsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<Appointment> appointments = new ArrayList<>();
            while (resultSet.next()) {
                Appointment appointment = new Appointment();
                setAppointmentFields(resultSet, appointment);
                appointments.add(appointment);
            }

            return appointments;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_APPOINTMENTS);
        }
    }

    private void setAppointmentFields(ResultSet resultSet, Appointment appointment) throws CustomException {
        try {
            appointment.setId(resultSet.getLong("id"));
            appointment.setDoctorId(resultSet.getLong("doctor_id"));
            appointment.setClientId(resultSet.getLong("client_id"));
            appointment.setServiceId(resultSet.getLong("service_id"));
            appointment.setStatus(resultSet.getString("status"));
            appointment.setApprovedTime(resultSet.getTimestamp("approved_time"));
            appointment.setRequestedTime(resultSet.getTimestamp("requested_time"));
            appointment.setDurationMin(resultSet.getInt("duration_min"));
            appointment.setCost(resultSet.getInt("cost"));
            appointment.setConfirmed(resultSet.getBoolean("confirmed"));
            appointment.setClientMessage(resultSet.getString("client_message"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_APPOINTMENT_FIELDS);
        }
    }

    private String getSqlUpdateScript(Appointment appointment) {
        String sqlScript = "UPDATE appointments SET ";
        if (appointment.getDoctorId() != null) {
            sqlScript += "doctor_id = " + appointment.getDoctorId() + ", ";
        }
        if (appointment.getServiceId() != null) {
            sqlScript += "service_id = '" + appointment.getServiceId() + "', ";
        }
        if (appointment.getStatus() != null) {
            sqlScript += "status = '" + appointment.getStatus() + "', ";
        }
        if (appointment.getApprovedTime() != null) {
            sqlScript += "approved_time = '" + appointment.getApprovedTime() + "', ";
        }
        if (appointment.getDurationMin() != null) {
            sqlScript += "duration_min = " + appointment.getDurationMin() + ", ";
        }
        if (appointment.getCost() != null) {
            sqlScript += "cost = " + appointment.getCost() + ", ";
        }
        if (appointment.isConfirmed() != null) {
            sqlScript += "confirmed = " + appointment.isConfirmed() + ", ";
        }
        if (appointment.getId() != null) {
            sqlScript = sqlScript.substring(0, sqlScript.length() - 2);
            sqlScript += " WHERE id = " + appointment.getId();
        }

        return sqlScript;
    }
}
