package com.example.server.servlet;

import com.example.server.service.UserService;
import com.example.server.util.Email;
import com.example.server.util.VerificationException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "TestServlet", value = "/api/test")
public class TestServlet extends HttpServlet {

    private static final Gson GSON = new GsonBuilder().create();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        Email.sendVerificationCode("chynga2002@mail.ru", "123456");
//        UserService.getInstance().confirmEmail("chynga2002@mail.ru", "");
//        VerificationConfirmed verificationConfirmed = new VerificationConfirmed(true);
//        response.getOutputStream().println(GSON.toJson(verificationConfirmed));

    }



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
