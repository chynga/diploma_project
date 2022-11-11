package com.example.server.dao;

import com.example.server.model.User;

import java.sql.*;

public class UserDAO {

    private static UserDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private UserDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static UserDAO getInstance() throws SQLException {
        if(INSTANCE == null) {
            INSTANCE = new UserDAO();
        }

        return INSTANCE;
    }

    public void register(User user) throws SQLException {
        String sql = "INSERT INTO users (firstname, lastname, email, phone, password)" +
                "VALUES (?, ?, ?, ?, ?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, user.getFirstName());
        preparedStmt.setString(2, user.getLastName());
        preparedStmt.setString(3, user.getEmail());
        preparedStmt.setString(4, user.getPhone());
        preparedStmt.setString(5, user.getPassword());
        int affectedRows = preparedStmt.executeUpdate();
        if (affectedRows == 0) {
            throw new SQLException("Creating user failed, no rows affected.");
        }

        ResultSet generatedKeys = preparedStmt.getGeneratedKeys();

        if (generatedKeys.next()) {
            user.setId(generatedKeys.getInt("id"));
            user.setEmailVerified(generatedKeys.getBoolean("emailVerified"));
            user.setRole(generatedKeys.getString("role"));
        }
        else {
            throw new SQLException("Creating user failed, no ID obtained.");
        }
    }

    public void updateUserInfo(User user) throws SQLException {
        String sql = "UPDATE users " +
                     "SET firstname = (?), lastname = (?), phone = (?) " +
                     "WHERE id = (?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, user.getFirstName());
        preparedStmt.setString(2, user.getLastName());
        preparedStmt.setString(3, user.getPhone());
        preparedStmt.setInt(4, user.getId());
        int affectedRows = preparedStmt.executeUpdate();
        if (affectedRows == 0) {
            throw new SQLException("Updating user failed, no rows affected.");
        }

        ResultSet generatedKeys = preparedStmt.getGeneratedKeys();

        if (generatedKeys.next()) {
            user.setId(generatedKeys.getInt("id"));
            user.setFirstName(generatedKeys.getString("firstname"));
            user.setLastName(generatedKeys.getString("lastname"));
            user.setPhone(generatedKeys.getString("phone"));
        }
        else {
            throw new SQLException("Updating user failed, no ID obtained.");
        }
    }

    public void updatePassword(User user) throws SQLException {
        String sql = "UPDATE users " +
                "SET password = (?) " +
                "WHERE id = (?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, user.getPassword());
        preparedStmt.setInt(2, user.getId());
        int affectedRows = preparedStmt.executeUpdate();
        if (affectedRows == 0) {
            throw new SQLException("Updating user failed, no rows affected.");
        }
    }

    public User getUserByEmail(String email) throws SQLException {
        String sql = "SELECT * FROM users WHERE email = (?)";
        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, email);
        ResultSet rs = preparedStmt.executeQuery();
        if (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("firstname");
            String surname = rs.getString("lastname");
            String phone = rs.getString("phone");
            String password = rs.getString("password");
            boolean emailVerified = rs.getBoolean("emailverified");
            String role = rs.getString("role");
            return new User(id, name, surname, email, phone, password, emailVerified, role);
        } else {
            throw new SQLException("Could not find user with specified email.");
        }
    }


    public String getPasswordById(int id) throws SQLException {
        String sql = "SELECT password FROM users WHERE id = (?)";
        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setInt(1, id);
        ResultSet rs = preparedStmt.executeQuery();
        if (rs.next()) {
            return rs.getString("password");
        } else {
            throw new SQLException("Could not find user with specified id.");
        }
    }

    public String getVerificationCodeByEmail(String email) throws SQLException {
        String sql = "SELECT verificationCode FROM users WHERE email = (?)";
        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, email);
        ResultSet rs = preparedStmt.executeQuery();
        if (rs.next()) {
            return rs.getString("verificationCode");
        } else {
            throw new SQLException("Could not find user with specified email.");
        }
    }

    public void setVerificationCode(String email, String code, Timestamp ts) throws SQLException {
        String sql = "UPDATE users SET verificationCode = (?), verificationCodeSent = (?) WHERE email = (?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql);
        preparedStmt.setString(1, code);
        preparedStmt.setTimestamp(2, ts);
        preparedStmt.setString(3, email);
        preparedStmt.executeUpdate();
    }

    public void setEmailVerified(String email) throws SQLException {
        String sql = "UPDATE users SET verificationCode = null, verificationCodeSent = null, emailVerified = true WHERE email = (?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql);
        preparedStmt.setString(1, email);
        preparedStmt.executeUpdate();
    }

    public String getRecoveryCodeByEmail(String email) throws SQLException {
        String sql = "SELECT recoveryCode FROM users WHERE email = (?)";
        PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        preparedStmt.setString(1, email);
        ResultSet rs = preparedStmt.executeQuery();
        if (rs.next()) {
            String code = rs.getString("recoveryCode");
            return code;
        } else {
            throw new SQLException("Could not find user with specified email.");
        }
    }

    public void setRecoveryCode(String email, String code, Timestamp ts) throws SQLException {
        String sql = "UPDATE users SET recoveryCode = (?), recoveryCodeSent = (?) WHERE email = (?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql);
        preparedStmt.setString(1, code);
        preparedStmt.setTimestamp(2, ts);
        preparedStmt.setString(3, email);
        preparedStmt.executeUpdate();
    }

    public void resetPassword(String email, String encryptedPassword) throws SQLException {
        String sql = "UPDATE users SET recoveryCode = null, recoveryCodeSent = null, password = (?) WHERE email = (?)";

        PreparedStatement preparedStmt = connection.prepareStatement(sql);
        preparedStmt.setString(1, encryptedPassword);
        preparedStmt.setString(2, email);
        preparedStmt.executeUpdate();
    }
}
