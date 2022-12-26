package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class UserService {
    private static UserService INSTANCE;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    private UserService() {}

    public static UserService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new UserService();
        }

        return INSTANCE;
    }

    public User register(User userCredentials) throws CustomException {
        String encodedPassword = bCryptPasswordEncoder.encode(userCredentials.getPassword());
        userCredentials.setPassword(encodedPassword);
        Long id = UserDAO.getInstance().register(userCredentials);

        return UserDAO.getInstance().getUserById(id);
    }

    public User login(User userCredentials) throws CustomException {
        User user = UserDAO.getInstance().getUserByEmail(userCredentials.getEmail());
        boolean passwordIsValid = bCryptPasswordEncoder.matches(userCredentials.getPassword(), user.getPassword());
        if (!passwordIsValid) throw new CustomException(ErrorCode.INVALID_PASSWORD);
        user.setRoles(RoleService.getInstance().getUserRoles(user));

        return user;
    }
}
