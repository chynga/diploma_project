package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ClientDAO;
import com.example.backend_with_jaxrs.dao.RoleDAO;
import com.example.backend_with_jaxrs.models.PushNotificationCredentials;
import com.example.backend_with_jaxrs.utils.enums.Role;
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
        User registeredUser = UserService.getInstance().register(user);
        ClientDAO.getInstance().insertClientFields(registeredUser.getId());
        Client client = ClientDAO.getInstance().getClientById(registeredUser.getId());
        RoleService.getInstance().addRoleToUser(client, Role.CLIENT);
        client.setRoles(RoleDAO.getInstance().getRolesById(client));

        return client;
    }

    public Client login(User user) throws CustomException {
        User loggedInUser = UserService.getInstance().login(user);
        Client client = ClientDAO.getInstance().getClientById(loggedInUser.getId());
        client.setRoles(loggedInUser.getRoles());

        return client;
    }

    public void subscribeToNotifications(PushNotificationCredentials credentials) throws CustomException {
        ClientDAO.getInstance().subscribeToNotifications(credentials);
    }

    public String getNotificationToken(Long clientId) throws CustomException {
        PushNotificationCredentials credentials = ClientDAO.getInstance().getNotificationToken(clientId);

        return credentials.getRegistrationToken();
    }
}
