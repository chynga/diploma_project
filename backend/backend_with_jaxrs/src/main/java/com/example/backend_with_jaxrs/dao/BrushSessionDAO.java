package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.TeethBrushSession;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class BrushSessionDAO extends GeneralDAO {
    private static BrushSessionDAO INSTANCE;

    private BrushSessionDAO() throws CustomException {
        super();
    }

    public static BrushSessionDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new BrushSessionDAO();
        }

        return INSTANCE;
    }

    public ArrayList<TeethBrushSession> getBrushSessions(Long clientId) throws CustomException {
        String sqlScript = "SELECT * FROM teeth_brush_sessions WHERE client_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, clientId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getBrushSessionsFromDb(resultSet);
    }

    public void createBrushSession(TeethBrushSession brushSession) throws CustomException {
        String sqlScript = "INSERT INTO teeth_brush_sessions (client_id, teeth_brushed_time, duration) " +
                "VALUES (?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, brushSession);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, TeethBrushSession brushSession) throws CustomException {
        try {
            preparedStatement.setLong(1, brushSession.getClientId());
            preparedStatement.setTimestamp(2, brushSession.getTeethBrushedTime());
            preparedStatement.setInt(3, brushSession.getDurationInSeconds());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<TeethBrushSession> getBrushSessionsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<TeethBrushSession> sessions = new ArrayList<>();
            while (resultSet.next()) {
                TeethBrushSession session = new TeethBrushSession();
                setBrushSessionFields(resultSet, session);
                sessions.add(session);
            }

            return sessions;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_BRUSH_SESSIONS);
        }
    }

    private void setBrushSessionFields(ResultSet resultSet, TeethBrushSession session) throws CustomException {
        try {
            session.setId(resultSet.getLong("id"));
            session.setClientId(resultSet.getLong("client_id"));
            session.setTeethBrushedTime(resultSet.getTimestamp("teeth_brushed_time"));
            session.setDurationInSeconds(resultSet.getInt("duration"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_BRUSH_SESSION_FIELDS);
        }
    }
}
