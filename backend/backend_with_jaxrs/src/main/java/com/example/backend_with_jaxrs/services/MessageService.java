package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.MessageDAO;
import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.util.ArrayList;

public class MessageService {
    private static MessageService INSTANCE;

    private MessageService() {}

    public static MessageService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new MessageService();
        }

        return INSTANCE;
    }

    public Message saveMessage(Message message) throws CustomException {
        return MessageDAO.getInstance().saveMessage(message);
    }

    public ArrayList<Message> getMessages(Long clientId) throws CustomException {
        return MessageDAO.getInstance().getMessages(new Message(clientId));
    }
}
