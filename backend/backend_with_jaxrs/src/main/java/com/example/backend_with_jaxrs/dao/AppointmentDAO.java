package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;
import java.util.ArrayList;

public class AppointmentDAO {

    private static AppointmentDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private AppointmentDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static AppointmentDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            try {
                INSTANCE = new AppointmentDAO();
            } catch (SQLException e) {
                throw new CustomException(e.getCause(), ErrorCode.SQL);
            }
        }

        return INSTANCE;
    }

    public ArrayList<Appointment> getAppointments() throws CustomException {
        try {
            String sql = "SELECT * FROM appointments";
            PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ResultSet rs = preparedStmt.executeQuery();

            ArrayList<Appointment> appointments = new ArrayList<>();
            while (rs.next()) {
                Appointment appointment = new Appointment();
                setAppointmentFields(rs, appointment);
                appointments.add(appointment);
            }

            return appointments;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    public Appointment makeAppointment(Appointment appointment) throws CustomException {
        try {
            String sql = "INSERT INTO appointments (doctor_id, client_id, service, requested_time, client_message) " +
                    "VALUES (?, ?, ?, ?, ?)";

            PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStmt.setInt(1, appointment.getDoctorId());
            preparedStmt.setInt(2, appointment.getClientId());
            preparedStmt.setString(3, appointment.getService());
            preparedStmt.setDate(4, appointment.getRequestedTime());
            preparedStmt.setString(5, appointment.getClientMessage());

            return getAppointmentFromDb(preparedStmt);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    public Appointment updateAppointment(Appointment appointment) throws CustomException {
        try {
            String sql = getSqlScriptForNonNull(appointment);
            PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            return getAppointmentFromDb(preparedStmt);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    private Appointment getAppointmentFromDb(PreparedStatement preparedStmt) throws CustomException {
        try {
            int affectedRows = preparedStmt.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Creating appointment failed, no rows affected.");
            }

            ResultSet generatedKeys = preparedStmt.getGeneratedKeys();
            Appointment appointment = new Appointment();

            if (generatedKeys.next()) {
                setAppointmentFields(generatedKeys, appointment);
            } else {
                throw new SQLException("Creating appointment failed, no ID obtained.");
            }

            return appointment;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    private void setAppointmentFields(ResultSet generatedKeys, Appointment appointment) throws SQLException {
        appointment.setId(generatedKeys.getInt("id"));
        appointment.setDoctorId(generatedKeys.getInt("doctor_id"));
        appointment.setClientId(generatedKeys.getInt("client_id"));
        appointment.setService(generatedKeys.getString("service"));
        appointment.setStatus(generatedKeys.getString("status"));
        appointment.setApprovedTime(generatedKeys.getDate("approved_time"));
        appointment.setRequestedTime(generatedKeys.getDate("requested_time"));
        appointment.setConfirmed(generatedKeys.getBoolean("confirmed"));
        appointment.setDoctorNotes(generatedKeys.getString("doctor_notes"));
        appointment.setClientMessage(generatedKeys.getString("client_message"));
    }

    public String getSqlScriptForNonNull(Appointment appointment) {
        String script = "UPDATE appointments SET";
        if (appointment.getDoctorId() != null) {
            script += " doctor_id = " + appointment.getDoctorId();
        }
        if (appointment.getClientId() != null) {
            script += " client_id = " + appointment.getClientId();
        }
        if (appointment.getService() != null) {
            script += " service = " + appointment.getService();
        }
        if (appointment.getStatus() != null) {
            script += " status = " + appointment.getStatus();
        }
        if (appointment.getApprovedTime() != null) {
            script += " approved_time = " + appointment.getApprovedTime();
        }
        if (appointment.getRequestedTime() != null) {
            script += " requested_time = " + appointment.getRequestedTime();
        }
        if (appointment.isConfirmed() != null) {
            script += " confirmed = " + appointment.isConfirmed();
        }
        if (appointment.getDoctorNotes() != null) {
            script += " doctor_notes = " + appointment.getDoctorNotes();
        }
        if (appointment.getClientMessage() != null) {
            script += " client_message = " + appointment.getClientMessage();
        }
        if (appointment.getId() != null) {
            script += " WHERE id = " + appointment.getId() + ";";
        }

        return script;
    }
}
