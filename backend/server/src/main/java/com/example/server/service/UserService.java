package com.example.server.service;

import com.example.server.dao.UserDAO;
import com.example.server.model.User;

public class UserService {

    private static UserService INSTANCE;

    private UserService() {}

    public static UserService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new UserService();
        }

        return INSTANCE;
    }

    public void registerUser(User user) {
        UserDAO.getInstance().registerUser(user);
    }
}
