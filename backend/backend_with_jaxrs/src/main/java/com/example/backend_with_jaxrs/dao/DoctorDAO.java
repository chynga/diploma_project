package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;
import java.util.ArrayList;

public class DoctorDAO {

    private static DoctorDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private DoctorDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static DoctorDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            try {
                INSTANCE = new DoctorDAO();
            } catch (SQLException e) {
                throw new CustomException(e, ErrorCode.SQL);
            }
        }

        return INSTANCE;
    }

    public ArrayList<User> getAvailableDoctors() throws CustomException {
        try {
            String sql = "SELECT users.id, full_name, email, phone, started_working_from, available, work_experience, about " +
                    "FROM users JOIN doctors ON users.id = doctors.id;";
            PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ResultSet rs = preparedStmt.executeQuery();

            ArrayList<User> doctors = new ArrayList<>();
            while (rs.next()) {
                User doctor = new User();
                setDoctorFields(rs, doctor);
                doctors.add(doctor);
            }

            return doctors;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    private void setDoctorFields(ResultSet generatedKeys, User doctor) throws SQLException {
        doctor.setId(generatedKeys.getInt("id"));
        doctor.setFullName(generatedKeys.getString("full_name"));
        doctor.setEmail(generatedKeys.getString("email"));
        doctor.setPhone(generatedKeys.getString("phone"));
        doctor.setPassword(generatedKeys.getString("password"));
        doctor.setRecoveryCode(generatedKeys.getString("recovery_code"));
        doctor.setRecoveryCodeSentTime(generatedKeys.getDate("recovery_code_sent_time"));
        doctor.setStartedWorkingFrom(generatedKeys.getDate("started_working_from"));
        doctor.setAvailable(generatedKeys.getBoolean("available"));
        doctor.setWorkExperience(generatedKeys.getInt("work_experience"));
        doctor.setAbout(generatedKeys.getString("about"));
    }
}
