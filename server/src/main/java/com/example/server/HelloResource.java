package com.example.server;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import javafx.scene.control.Alert;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.sql.*;

@Path("/hello-world")
public class HelloResource {
    @GET
    @Produces("text/plain")
    public String hello() {
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:8081/diploma_project", "postgres", "admin")) {

                System.out.println("Java JDBC PostgreSQL Example");

                System.out.println("Connected to PostgreSQL database!");
                Statement statement = connection.createStatement();
                System.out.println("Reading car records...");
                System.out.printf("%-30.30s  %-30.30s%n", "Model", "Price");
                ResultSet resultSet = statement.executeQuery("SELECT * FROM users");
                while (resultSet.next()) {
                    System.out.printf("%-30.30s  %-30.30s%n", resultSet.getString("email"), resultSet.getString("password"));
                }

            } /*catch (ClassNotFoundException e) {
            System.out.println("PostgreSQL JDBC driver not found.");
            e.printStackTrace();
        }*/ catch (SQLException e) {
                System.out.println("Connection failure.");
                e.printStackTrace();
            }

//            final String JDBC_DRIVER = "org.postgresql.Driver";
//            final String DB_URL = "jdbc:postgresql://localhost:8081/diploma_project";
//            final String USER = "postgres";
//            final String PASS = "admin";
//            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);;
//            System.out.println("-----------");

//            System.out.println("Attempting to connect to database");
//            try {
//                Class.forName(JDBC_DRIVER);
//                conn = DriverManager.getConnection(DB_URL, USER, PASS);
//                stmt = conn.createStatement();
//                return "Successfully connected to database!";
//            } catch (Exception e) {
//                System.out.println("------------");
////                e.printStackTrace();
////                Alert a = new Alert(Alert.AlertType.ERROR);
////                a.show();
//            }

            String token = JWT.create()
                    .withIssuer("auth0")
                    .sign(algorithm);
            return token;
        } catch (JWTCreationException exception){
            //Invalid Signing configuration / Couldn't convert Claims.
        }
        return "Hello, World!";
    }
}