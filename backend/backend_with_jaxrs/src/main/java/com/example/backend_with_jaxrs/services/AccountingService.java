package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AccountingDAO;
import com.example.backend_with_jaxrs.models.accounting.MonthlyReport;
import com.example.backend_with_jaxrs.utils.CustomException;

public class AccountingService {
    private static AccountingService INSTANCE;

    private AccountingService() {}

    public static AccountingService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new AccountingService();
        }

        return INSTANCE;
    }

    public MonthlyReport getMonthlyReport(Integer month) throws CustomException {
        return AccountingDAO.getInstance().getMonthlyReport(month);
    }
}
