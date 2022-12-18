package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ClientDAO;
import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.UserWithAdditionalFields;
import com.example.backend_with_jaxrs.utils.CustomException;

public class ClientService {

    private static ClientService INSTANCE;

    private ClientService() {}

    public static ClientService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new ClientService();
        }

        return INSTANCE;
    }

    public UserWithAdditionalFields register(User user) throws CustomException {
        int id = UserDAO.getInstance().register(user);
        ClientDAO.getInstance().insertClientFields(new UserWithAdditionalFields(id));
        return ClientDAO.getInstance().getClientById(new UserWithAdditionalFields(id));
    }
}
