package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.UserWithAdditionalFields;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

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

    public ArrayList<UserWithAdditionalFields> getAvailableDoctors() throws CustomException {
        String sqlScript = "SELECT users.id, full_name, email, phone, started_working_from, available, work_experience, about " +
                "FROM users JOIN doctors ON users.id = doctors.id" +
                "WHERE available = true";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);
        return getDoctorsFromDb(resultSet);
    }

    private ArrayList<UserWithAdditionalFields> getDoctorsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<UserWithAdditionalFields> doctors = new ArrayList<>();
            while (resultSet.next()) {
                UserWithAdditionalFields doctor = new UserWithAdditionalFields();
                setDoctorFields(resultSet, doctor);
                doctors.add(doctor);
            }
            return doctors;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_DOCTORS);
        }
    }

    private void setDoctorFields(ResultSet resultSet, UserWithAdditionalFields doctor) throws CustomException {
        UserDAO.setUserFields(resultSet, doctor);
        try {
            doctor.setStartedWorkingFrom(resultSet.getDate("started_working_from"));
            doctor.setAvailable(resultSet.getBoolean("available"));
            doctor.setWorkExperience(resultSet.getInt("work_experience"));
            doctor.setAbout(resultSet.getString("about"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_DOCTOR_FIELDS);
        }
    }
}
