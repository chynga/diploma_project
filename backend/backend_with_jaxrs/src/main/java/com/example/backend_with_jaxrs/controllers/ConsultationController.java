package com.example.backend_with_jaxrs.controllers;

import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.models.message.MessageDecoder;
import com.example.backend_with_jaxrs.models.message.MessageEncoder;
import com.example.backend_with_jaxrs.services.MessageService;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.Jwt;
import com.example.backend_with_jaxrs.utils.enums.Role;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.*;

@ServerEndpoint(value = "/chat", decoders = MessageDecoder.class, encoders = MessageEncoder.class)
public class ConsultationController {

    private static Map<Long, Session> clients = Collections.synchronizedMap(new HashMap<>());
    private static Map<Long, Session> consultants = Collections.synchronizedMap(new HashMap<>());

    @OnOpen
    public void onOpen(Session session) throws CustomException {
        Long clientId = getClientId(session.getQueryString());
        String token = getToken(session.getQueryString());

        List<String> roles = Jwt.getRoles(token);
        Long userId = Jwt.getUserId(token);

        if (roles.contains(Role.CLIENT.name) && clientId == userId) {
            clients.put(userId, session);
        } else if (roles.contains(Role.CONSULTANT.name)) {
            consultants.put(userId, session);
        } else {
            throw new CustomException(ErrorCode.NOT_ALLOWED_ROLE_IN_CHAT);
        }
    }

    @OnMessage
    public void onMessage(Session session, Message message) throws CustomException {
        Long clientId = getClientId(session.getQueryString());
        String token = getToken(session.getQueryString());

        List<String> roles = Jwt.getRoles(token);
        Long id = Jwt.getUserId(token);

        message.setClientId(clientId);
        message.setConsultantId(roles.contains(Role.CONSULTANT.name) ? id : null);
        message.setIsClient(roles.contains(Role.CLIENT.name));

        Date date = new Date();
        Timestamp ts = new Timestamp(date.getTime());
        message.setSentTime(ts);
        message = MessageService.getInstance().saveMessage(message);

        sendMessage(message);
    }

    @OnClose
    public void onClose(Session session) {
        Long clientId = getClientId(session.getQueryString());
        String token = getToken(session.getQueryString());

        List<String> roles = Jwt.getRoles(token);
        Long userId = Jwt.getUserId(token);

        if (roles.contains(Role.CLIENT.name) && clientId == userId) {
            clients.remove(userId);
        } else if (roles.contains(Role.CONSULTANT.name)) {
            consultants.remove(userId);
        }
    }

    private static void sendMessage(Message message) throws CustomException {
        try {
            if (clients.get(message.getClientId()) != null) {
                clients.get(message.getClientId()).getBasicRemote().sendObject(message);
            }
        } catch (IOException | EncodeException e) {
            throw new CustomException(ErrorCode.MESSAGE_SENDING);
        }

        for (Session session : consultants.values()) {
            try {
                session.getBasicRemote()
                        .sendObject(message);
            } catch (IOException | EncodeException e) {
                throw new CustomException(ErrorCode.MESSAGE_SENDING);
            }
        }
    }

    private Long getClientId(String queryString) {
        String[] queryParams = queryString.split("&");
        return Long.valueOf(queryParams[0].substring("client_id=".length()));
    }

    private String getToken(String queryString) {
        String[] queryParams = queryString.split("&");
        return queryParams[1].substring("token=".length());
    }
}
