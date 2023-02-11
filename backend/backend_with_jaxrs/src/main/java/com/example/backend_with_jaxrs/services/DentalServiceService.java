package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ServiceDAO;
import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.util.ArrayList;

public class DentalServiceService {
    private static DentalServiceService INSTANCE;

    private DentalServiceService() {}

    public static DentalServiceService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new DentalServiceService();
        }

        return INSTANCE;
    }

    public ArrayList<Service> getServices() throws CustomException {
        return ServiceDAO.getInstance().getServices();
    }

    public Service getService(Long id) throws CustomException {
        return ServiceDAO.getInstance().getService(id);
    }

    public void addService(Service service) throws CustomException {
        ServiceDAO.getInstance().addService(service);
    }

    public void updateService(Service service) throws CustomException {
        ServiceDAO.getInstance().updateService(service);
    }

    public void deleteService(Long id) throws CustomException {
        ServiceDAO.getInstance().deleteService(id);
    }
}
