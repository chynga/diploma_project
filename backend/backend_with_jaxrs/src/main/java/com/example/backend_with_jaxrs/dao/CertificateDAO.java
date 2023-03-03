package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Doctor;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CertificateDAO extends GeneralDAO {
    private static CertificateDAO INSTANCE;

    private CertificateDAO() throws CustomException {
        super();
    }

    public static CertificateDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new CertificateDAO();
        }

        return INSTANCE;
    }

    public ArrayList<String> getDoctorCertificates(Long doctorId) throws CustomException {
        String sqlScript = "SELECT * FROM certificates " +
                "WHERE doctor_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctorId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getCertificatesFromDb(resultSet);
    }

    public void removeCertificatesByDoctorId(Long doctorId) throws CustomException {
        String sqlScript = "DELETE FROM certificates " +
                "WHERE doctor_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, doctorId);
        executeUpdate(preparedStatement);
    }

    public void addCertificatesToDoctor(Doctor doctor) throws CustomException {
        String sqlScript = "";
        for (String certificate : doctor.getCertificates()) {
            sqlScript += "INSERT INTO certificates (doctor_id, url) " +
                    "VALUES (" + doctor.getId() + ", '" + certificate + "');\n";
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

    private ArrayList<String> getCertificatesFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<String> certificates = new ArrayList();
            while (resultSet.next()) {
                certificates.add(resultSet.getString("url"));
            }

            return certificates;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_CERTIFICATES);
        }
    }
}
