package com.example.server.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.server.model.User;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Date;

import static java.util.stream.Collectors.joining;

public class Util {

    private static Algorithm algorithm = Algorithm.HMAC256("secret");

    public static String readInputStream(InputStream stream) {
        return new BufferedReader(new InputStreamReader(stream)).lines().collect(joining("\n"));
    }

    public static String getToken(User user) {
        return JWT.create()
                .withIssuer("auth0")
                .withClaim("id", user.getId())
                .withClaim("role", user.getRole())
                .withExpiresAt(new Date(new Date().getTime() + (1000 * 60 * 60 * 24)))
                .sign(algorithm);
    }
}