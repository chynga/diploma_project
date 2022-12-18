package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ClientDAO;
import com.example.backend_with_jaxrs.dao.RoleDAO;
import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.Role;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.models.Client;
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

    public Client register(User user) throws CustomException {
        int id = UserDAO.getInstance().register(user);
        ClientDAO.getInstance().insertClientFields(new Client(id));
        Client client = ClientDAO.getInstance().getClientById(new Client(id));
        RoleDAO.getInstance().addRoleToUser(client, Role.CLIENT);
        client.setRoles(RoleDAO.getInstance().getRolesForUser(client));

        return client;
    }
}
