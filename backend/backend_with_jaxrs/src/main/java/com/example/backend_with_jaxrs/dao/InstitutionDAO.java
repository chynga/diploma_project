package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class InstitutionDAO extends GeneralDAO {
    private static InstitutionDAO INSTANCE;

    private InstitutionDAO() throws CustomException {
        super();
    }

    public static InstitutionDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new InstitutionDAO();
        }

        return INSTANCE;
    }

    public ArrayList<String> getDoctorInstitutions(Long doctorId) throws CustomException {
        String sqlScript = "SELECT * FROM institutions " +
                "WHERE doctor_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctorId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getInstitutionsFromDb(resultSet);
    }

    public void removeInstitutionsByDoctorId(Long doctorId) throws CustomException {
        String sqlScript = "DELETE FROM institutions " +
                "WHERE doctor_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctorId);
        executeUpdate(preparedStatement);
    }

    public void addInstitutionsToDoctor(Doctor doctor) throws CustomException {
        String sqlScript = "";
        for (String institution : doctor.getInstitutions()) {
            sqlScript += "INSERT INTO institutions (doctor_id, name) " +
                    "VALUES (" + doctor.getId() + ", '" + institution + "');\n";
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

    private ArrayList<String> getInstitutionsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<String> institutions = new ArrayList();
            while (resultSet.next()) {
                institutions.add(resultSet.getString("name"));
            }

            return institutions;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_INSTITUTIONS);
        }
    }
}
