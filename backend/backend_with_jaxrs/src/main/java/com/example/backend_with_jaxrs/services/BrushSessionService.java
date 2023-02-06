package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.dao.BrushSessionDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.TeethBrushSession;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.util.ArrayList;

public class BrushSessionService {
    private static BrushSessionService INSTANCE;

    private BrushSessionService() {}

    public static BrushSessionService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new BrushSessionService();
        }

        return INSTANCE;
    }

    public ArrayList<TeethBrushSession> getBrushSessions(Long clientId) throws CustomException {
        return BrushSessionDAO.getInstance().getBrushSessions(clientId);
    }

    public void createBrushSession(TeethBrushSession brushSession) throws CustomException {
        BrushSessionDAO.getInstance().createBrushSession(brushSession);
    }
}
