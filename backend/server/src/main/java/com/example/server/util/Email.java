package com.example.server.util;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email {

    public static void sendVerificationCode(String to, String subject, String text) throws MessagingException {
//        String from = "chynga2002@gmail.com";
//        String appPassword = "sskvqqeajpafhejh";
//        String from = "testttts325@gmail.com";
//        String appPassword = "yntovzpkbjtumscb";
        String from = "sdfdsfa3@mail.ru";
        String appPassword = "SNrNjksFKfX37dM0j4iK";


        Properties properties = System.getProperties();

        if (from.contains("@gmail.com")) {
            // gmail.com
            properties.put("mail.smtp.host", "smtp.gmail.com");
            properties.put("mail.smtp.port", "25"); // options: 25, 465, 587
            properties.put("mail.smtp.starttls.enable", "true");
            properties.put("mail.smtp.auth", "true");
        } else if (from.contains("@mail.ru")) {
            // mail.ru
            properties.put("mail.smtp.host", "smtp.mail.ru");
            properties.put("mail.smtp.port", "465");
            properties.put("mail.smtp.starttls.enable", "true");
            properties.put("mail.smtp.auth", "true");
            properties.put("mail.smtp.ssl.enable", "true");
//            properties.put("mail.smtps.ssl.checkserveridentity", true);
//            properties.put("mail.smtps.ssl.trust", "*");
        } else {
            return;
        }

        // Get the Session object.// and pass username and password
        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, appPassword);
            }
        });

        // Used to debug SMTP issues
        session.setDebug(true);

        // Create a default MimeMessage object.
        MimeMessage message = new MimeMessage(session);

        // Set From: header field of the header.
        message.setFrom(new InternetAddress(from));

        // Set To: header field of the header.
        message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

        // Set Subject: header field
        message.setSubject(subject);

        // Now set the actual message
        message.setText(text);

        System.out.println("sending...");
        // Send message
        Transport.send(message);
        System.out.println("Sent message successfully....");
    }

}