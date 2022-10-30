package com.example.server.service;

import com.example.server.dao.UserDAO;
import com.example.server.model.User;
import com.example.server.util.Email;
import com.example.server.util.VerificationException;
import com.example.server.util.validaiton.name.InvalidNameException;
import com.example.server.util.validaiton.name.NameValidator;
import com.example.server.util.validaiton.password.InvalidPasswordException;
import com.example.server.util.validaiton.password.PasswordValidator;
import com.example.server.util.validaiton.phone.InvalidPhoneException;
import com.example.server.util.validaiton.phone.PhoneValidator;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Random;

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

    public User registerUser(String firstName, String lastName, String email, String phone, String password) throws SQLException, InvalidPasswordException, InvalidPhoneException, InvalidNameException {
        PasswordValidator.isValid(password);
        PhoneValidator.isValid(phone);
        NameValidator.isValid(firstName);
        NameValidator.isValid(lastName);
        User user = new User(firstName, lastName, email, phone, password);

        String pbkdf2CryptedPassword = pbkdf2PasswordEncoder.encode(password);
        user.setPassword(pbkdf2CryptedPassword);
        UserDAO.getInstance().registerAndSetDefaults(user);
        user.removePassword();

        // verification code via email
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        String code = String.format("%06d", number);
        Email.sendVerificationCode(user.getEmail(), code);
        // saving verification code
        Date date = new Date();
        Timestamp ts = new Timestamp(date.getTime());
        UserDAO.getInstance().setVerificationCode(user.getEmail(), code, ts);

        return user;
    }

    public User confirmEmail(String email, String code) throws SQLException, VerificationException {
        String verificationCode = UserDAO.getInstance().getVerificationCodeByEmail(email);
        if (code.equals(verificationCode)) {
            UserDAO.getInstance().setEmailVerified(email);
            User user = UserDAO.getInstance().getUserByEmail(email);
            return user;
        }

        throw new VerificationException("invalid verification code");
    }

    public User loginUser(String email, String password) throws SQLException, InvalidPasswordException {
        User user = UserDAO.getInstance().getUserByEmail(email);

        PasswordValidator.isValid(password, user.getPassword());
        user.removePassword();
        return user;
    }
}

