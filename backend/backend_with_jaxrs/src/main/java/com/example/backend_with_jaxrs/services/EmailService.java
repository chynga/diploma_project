package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ClientDAO;
import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.EmailVerification;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.Email;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Random;

public class EmailService {
    private static EmailService INSTANCE;

    private EmailService() {}

    public static EmailService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new EmailService();
        }

        return INSTANCE;
    }

    public void verifyEmail(EmailVerification emailVerification) throws CustomException {
        User user = UserDAO.getInstance().getUserByEmail(emailVerification.getEmail());
        if (emailVerification.getCode() == null) {
            sendVerificationCode(emailVerification.getEmail(), user.getId());
            return;
        }

        String verificationCode = ClientDAO.getInstance().getVerificationCode(user.getId());
        if (!emailVerification.getCode().equals(verificationCode)) throw new CustomException(ErrorCode.INVALID_VERIFICATION_CODE);
        ClientDAO.getInstance().removeVerificationCode(user.getId());
    }

    private void sendVerificationCode(String email, Long clientId) throws CustomException {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        String code = String.format("%06d", number);
        String subject = "Email Verification";
        String text = "Enter the following code to confirm your email address and complete setup for your account:\n"
                + "<h2>" + code + "</h2>";
        Email.sendCode(email, subject, text);

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        ClientDAO.getInstance().setVerificationCode(clientId, code, timestamp);
    }
}
