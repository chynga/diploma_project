package com.example.backend_with_jaxrs.filters;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.backend_with_jaxrs.utils.Jwt;
import javafx.util.Pair;

import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Provider
@PreMatching
public class BearerTokenFilter implements ContainerRequestFilter {
    public void filter(ContainerRequestContext requestContext) {
        if (isUriUnProtected(requestContext.getUriInfo().getPath(), requestContext.getMethod())) {
            return;
        }
        String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new NotAuthorizedException("Authorization header must be provided");
        }

        String token = Jwt.getTokenFromHeader(authorizationHeader);
        DecodedJWT decodedJWT = Jwt.decodeToken(token);
        List<String> userRoles = decodedJWT.getClaim("roles").asList(String.class);

        requestContext.setSecurityContext(new SecurityContext() {
            @Override
            public Principal getUserPrincipal() {
                return null;
            }

            @Override
            public boolean isUserInRole(String role) {
                return userRoles.contains(role);
            }

            @Override
            public boolean isSecure() {
                return false;
            }

            @Override
            public String getAuthenticationScheme() {
                return null;
            }
        });
    }

    private boolean isUriUnProtected(String path, String method) {
        ArrayList<Pair> unProtectedUris = new ArrayList<>();
        unProtectedUris.add(new Pair<>("authentication/register", "POST"));
        unProtectedUris.add(new Pair<>("authentication/login", "POST"));
        unProtectedUris.add(new Pair<>("reviews", "POST"));
        unProtectedUris.add(new Pair<>("doctors", "GET"));
        unProtectedUris.add(new Pair<>("test", "POST"));
        unProtectedUris.add(new Pair<>("email/verify", "POST"));
        unProtectedUris.add(new Pair<>("password/recover", "POST"));
        unProtectedUris.add(new Pair<>("test", "*"));

        return unProtectedUris.contains(new Pair<>(path, method)) || unProtectedUris.contains(new Pair<>(path, "*"));
    }
}