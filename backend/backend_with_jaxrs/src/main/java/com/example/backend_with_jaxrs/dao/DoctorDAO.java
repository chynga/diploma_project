package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.daoActions.AppointmentAction;

import java.sql.*;
import java.util.ArrayList;

public class DoctorDAO extends GeneralDAO {
    private static DoctorDAO INSTANCE;

    private DoctorDAO() throws CustomException {
        super();
    }

    public static DoctorDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new DoctorDAO();
        }

        return INSTANCE;
    }

    public ArrayList<Doctor> getAvailableDoctors() throws CustomException {
        String sqlScript = "SELECT * " +
                "FROM users JOIN doctors ON users.id = doctors.id " +
                "WHERE available = true";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getDoctorsFromDb(resultSet);
    }

    public Doctor getAvailableDoctor(Long id) throws CustomException {
        String sqlScript = "SELECT * " +
                "FROM users JOIN doctors ON users.id = doctors.id " +
                "WHERE doctors.id = (?) AND available = true";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, id);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getDoctorFromDb(resultSet);
    }

    public ArrayList<Doctor> getDoctors() throws CustomException {
        String sqlScript = "SELECT * FROM users JOIN doctors ON users.id = doctors.id";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getDoctorsFromDb(resultSet);
    }

    public void updateDoctorInfo(Doctor doctor) throws CustomException {
        String sqlScript = "UPDATE doctors SET started_working_from = (?), available = (?), " +
                "about = (?) WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctor);
        execute(preparedStatement);
    }

    public void createDoctor(Long userId) throws CustomException {
        String sqlScript = "INSERT INTO doctors (id) " +
                "VALUES (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, userId);
        execute(preparedStatement);
    }

    public boolean doctorExists(Long userId) throws CustomException {
        String sqlScript = "SELECT users.id, full_name, email, phone, started_working_from, available, about " +
                "FROM users JOIN doctors ON users.id = doctors.id " +
                "WHERE users.id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, userId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return doctorObtained(resultSet);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Doctor doctor) throws CustomException {
        try {
            preparedStatement.setTimestamp(1, doctor.getStartedWorkingFrom());
            preparedStatement.setBoolean(2, doctor.isAvailable());
            preparedStatement.setString(3, doctor.getAbout());
            preparedStatement.setLong(4, doctor.getId());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<Doctor> getDoctorsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<Doctor> doctors = new ArrayList<>();
            while (resultSet.next()) {
                Doctor doctor = new Doctor();
                setDoctorFields(resultSet, doctor);
                doctors.add(doctor);
            }

            return doctors;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_DOCTORS);
        }
    }

    private Doctor getDoctorFromDb(ResultSet resultSet) throws CustomException {
        try {
            if (resultSet.next()) {
                Doctor doctor = new Doctor();
                setDoctorFields(resultSet, doctor);
                return doctor;
            } else {
                throw new CustomException(ErrorCode.SQL_GET_DOCTOR);
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_DOCTOR);
        }
    }

    private boolean doctorObtained(ResultSet resultSet) throws CustomException {
        try {
            return resultSet.next();
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_DOCTOR);
        }
    }

    private void setDoctorFields(ResultSet resultSet, Doctor doctor) throws CustomException {
        UserDAO.setUserFields(resultSet, doctor);
        try {
            doctor.setStartedWorkingFrom(resultSet.getTimestamp("started_working_from"));
            doctor.setAvailable(resultSet.getBoolean("available"));
            doctor.setAbout(resultSet.getString("about"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_DOCTOR_FIELDS);
        }
    }
}
