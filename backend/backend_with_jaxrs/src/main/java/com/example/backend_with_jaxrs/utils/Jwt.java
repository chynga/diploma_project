package com.example.backend_with_jaxrs.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.example.backend_with_jaxrs.models.User;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Jwt {
    private static Algorithm algorithm = Algorithm.HMAC256("secret");

    public static String getToken(User user) {
        ArrayList<String> roleNames = new ArrayList<>();
        user.getRoles().forEach(role -> roleNames.add(role));
        return JWT.create()
                .withClaim("id", user.getId())
                .withClaim("fullName", user.getFullName())
                .withClaim("email", user.getEmail())
                .withClaim("phone", user.getPhone())
                .withClaim("roles", roleNames)
                .withExpiresAt(new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7)))
                .sign(algorithm);
    }

    public static DecodedJWT decodeToken(String token) {
        JWTVerifier verifier = JWT.require(algorithm).build();

        return verifier.verify(token);
    }

    public static List<String> getRoles(String token) {
        DecodedJWT decodedJWT = Jwt.decodeToken(token);
        return decodedJWT.getClaim("roles").asList(String.class);
    }

    public static Long getUserId(String token) {
        DecodedJWT decodedJWT = Jwt.decodeToken(token);
        return decodedJWT.getClaim("id").asLong();
    }

    public static String getTokenFromHeader(String authorizationHeader) {
        return authorizationHeader.substring("Bearer".length()).trim();
    }
}
