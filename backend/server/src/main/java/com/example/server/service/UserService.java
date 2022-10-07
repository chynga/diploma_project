package com.example.server.service;

import com.example.server.dao.UserDAO;
import com.example.server.model.User;

import java.sql.SQLException;

public class UserService {

    private static UserService INSTANCE;

    private UserService() {}

    public static UserService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new UserService();
        }

        return INSTANCE;
    }

    public User registerUser(String name, String surname, String email, String phone, String password) throws SQLException {
        
        User user = new User(name, surname, email, phone, password);
        UserDAO.getInstance().registerAndSetDefaults(user);
        return user;
    }
}
