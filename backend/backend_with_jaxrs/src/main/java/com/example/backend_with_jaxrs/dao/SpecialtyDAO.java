package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SpecialtyDAO extends GeneralDAO {
    private static SpecialtyDAO INSTANCE;

    private SpecialtyDAO() throws CustomException {
        super();
    }

    public static SpecialtyDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new SpecialtyDAO();
        }

        return INSTANCE;
    }

    public ArrayList<String> getDoctorSpecialties(Long doctorId) throws CustomException {
        String sqlScript = "SELECT * FROM specialties " +
                "WHERE doctor_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctorId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getSpecialtiesFromDb(resultSet);
    }

    public void removeSpecialtiesByDoctorId(Long doctorId) throws CustomException {
        String sqlScript = "DELETE FROM specialties " +
                "WHERE doctor_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctorId);
        executeUpdate(preparedStatement);
    }

    public void addSpecialtiesToDoctor(Doctor doctor) throws CustomException {
        String sqlScript = "";
        for (String specialty : doctor.getSpecialties()) {
            sqlScript += "INSERT INTO specialties (doctor_id, name) " +
                    "VALUES (" + doctor.getId() + ", '" + specialty + "');\n";
        }
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        execute(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<String> getSpecialtiesFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<String> specialties = new ArrayList();
            while (resultSet.next()) {
                specialties.add(resultSet.getString("name"));
            }

            return specialties;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_SPECIALTIES);
        }
    }
}
