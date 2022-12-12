package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.DoctorDAO;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.sql.SQLException;
import java.util.ArrayList;

public class DoctorService {

    private static DoctorService INSTANCE;

    private DoctorService() {}

    public static DoctorService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new DoctorService();
        }

        return INSTANCE;
    }

    public ArrayList<User> getAvailableDoctors() throws CustomException {
        return DoctorDAO.getInstance().getAvailableDoctors();
    }
}
