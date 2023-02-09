package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.PasswordRecovery;
import com.example.backend_with_jaxrs.models.RoleAssignment;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.Email;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

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

    public void recoverPassword(PasswordRecovery passwordRecoveryCredentials) throws CustomException {
        User user = UserDAO.getInstance().getUserByEmail(passwordRecoveryCredentials.getEmail());
        if (passwordRecoveryCredentials.getCode() == null) {
            sendRecoveryCode(passwordRecoveryCredentials.getEmail(), user.getId());
            return;
        }

        String recoveryCode = UserDAO.getInstance().getRecoveryCode(user.getId());
        if (!passwordRecoveryCredentials.getCode().equals(recoveryCode)) throw new CustomException(ErrorCode.INVALID_RECOVERY_CODE);
        String encodedPassword = bCryptPasswordEncoder.encode(passwordRecoveryCredentials.getPassword());
        user.setPassword(encodedPassword);
        UserDAO.getInstance().updatePassword(user);
        UserDAO.getInstance().removeRecoveryCode(user.getId());
    }

    private void sendRecoveryCode(String email, Long userId) throws CustomException {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        String code = String.format("%06d", number);
        String subject = "Password Recovery";
        String text = "Enter the following code to recover password:\n"
                + "<h2>" + code + "</h2>";
        Email.sendCode(email, subject, text);

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        UserDAO.getInstance().setRecoveryCode(userId, code, timestamp);
    }

    public void createEmployee(User employee) throws CustomException {
        User newEmployee = register(employee);
        RoleService.getInstance().addRolesToUser(new RoleAssignment(newEmployee.getId(), employee.getRoles()));
    }

    public ArrayList<User> getEmployees() throws CustomException {
        ArrayList<User> employees = UserDAO.getInstance().getEmployees();
        ArrayList<String> roles;
        for (User employee : employees) {
            roles = RoleService.getInstance().getUserRoles(employee);
            employee.setRoles(roles);
        }

        return employees;
    }

    public User getEmployee(Long id) throws CustomException {
        User employee = UserDAO.getInstance().getEmployee(id);
        ArrayList<String> roles = RoleService.getInstance().getUserRoles(employee);
        employee.setRoles(roles);

        return employee;
    }

    public void updateEmployee(User employee) throws CustomException {
        UserDAO.getInstance().updateUserInfo(employee);
        RoleService.getInstance().addRolesToUser(new RoleAssignment(employee.getId(), employee.getRoles()));
    }

    public ArrayList<User> getClients() throws CustomException {
        ArrayList<User> clients = UserDAO.getInstance().getClients();

        return clients;
    }
}
