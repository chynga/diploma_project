package com.example.server.service;

import com.example.server.dao.UserDAO;
import com.example.server.model.User;
import com.example.server.util.password.InvalidPasswordException;
import com.example.server.util.password.PasswordValidator;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;

import java.sql.SQLException;

public class UserService {

    private static UserService INSTANCE;

    private Pbkdf2PasswordEncoder pbkdf2PasswordEncoder = new Pbkdf2PasswordEncoder();

    private UserService() {}

    public static UserService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new UserService();
        }

        return INSTANCE;
    }

    public User registerUser(String firstName, String lastName, String email, String phone, String password) throws SQLException, InvalidPasswordException {
        PasswordValidator.isValid(password);
        User user = new User(firstName, lastName, email, phone, password);

        String pbkdf2CryptedPassword = pbkdf2PasswordEncoder.encode(password);
        user.setPassword(pbkdf2CryptedPassword);
        UserDAO.getInstance().registerAndSetDefaults(user);
        user.removePassword();
        return user;
    }

    public User loginUser(String email, String password) throws SQLException, InvalidPasswordException {
        User user = UserDAO.getInstance().getUserByEmail(email);

        PasswordValidator.isValid(password, user.getPassword());
        user.removePassword();
        return user;
    }


}

