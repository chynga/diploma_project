package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.AppointmentAction;

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

    public ArrayList<Appointment> getAppointments() throws CustomException {
        String sqlScript = "SELECT * FROM appointments";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getAppointmentsFromDb(resultSet);
    }

    public Appointment makeAppointment(Appointment appointment) throws CustomException {
        String sqlScript = "INSERT INTO appointments (doctor_id, client_id, service, requested_time, client_message) " +
                "VALUES (?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, appointment, AppointmentAction.MAKE_APPOINTMENT);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    public Appointment updateAppointment(Appointment appointment) throws CustomException {
        String sqlScript = getSqlScriptForNonNull(appointment);
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getAppointmentFromDb(resultSet);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Appointment appointment, AppointmentAction appointmentAction) throws CustomException {
        try {
            switch (appointmentAction) {
                case MAKE_APPOINTMENT:
                    preparedStatement.setInt(1, appointment.getDoctorId());
                    preparedStatement.setInt(2, appointment.getClientId());
                    preparedStatement.setString(3, appointment.getService());
                    preparedStatement.setDate(4, appointment.getRequestedTime());
                    preparedStatement.setString(5, appointment.getClientMessage());
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
            appointment.setId(resultSet.getInt("id"));
            appointment.setDoctorId(resultSet.getInt("doctor_id"));
            appointment.setClientId(resultSet.getInt("client_id"));
            appointment.setService(resultSet.getString("service"));
            appointment.setStatus(resultSet.getString("status"));
            appointment.setApprovedTime(resultSet.getDate("approved_time"));
            appointment.setRequestedTime(resultSet.getDate("requested_time"));
            appointment.setConfirmed(resultSet.getBoolean("confirmed"));
            appointment.setDoctorNotes(resultSet.getString("doctor_notes"));
            appointment.setClientMessage(resultSet.getString("client_message"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_APPOINTMENT_FIELDS);
        }
    }

    private String getSqlScriptForNonNull(Appointment appointment) {
        String sqlScript = "UPDATE appointments SET";
        if (appointment.getDoctorId() != null) {
            sqlScript += " doctor_id = " + appointment.getDoctorId();
        }
        if (appointment.getClientId() != null) {
            sqlScript += " client_id = " + appointment.getClientId();
        }
        if (appointment.getService() != null) {
            sqlScript += " service = " + appointment.getService();
        }
        if (appointment.getStatus() != null) {
            sqlScript += " status = " + appointment.getStatus();
        }
        if (appointment.getApprovedTime() != null) {
            sqlScript += " approved_time = " + appointment.getApprovedTime();
        }
        if (appointment.getRequestedTime() != null) {
            sqlScript += " requested_time = " + appointment.getRequestedTime();
        }
        if (appointment.isConfirmed() != null) {
            sqlScript += " confirmed = " + appointment.isConfirmed();
        }
        if (appointment.getDoctorNotes() != null) {
            sqlScript += " doctor_notes = " + appointment.getDoctorNotes();
        }
        if (appointment.getClientMessage() != null) {
            sqlScript += " client_message = " + appointment.getClientMessage();
        }
        if (appointment.getId() != null) {
            sqlScript += " WHERE id = " + appointment.getId();
        }

        return sqlScript;
    }
}
