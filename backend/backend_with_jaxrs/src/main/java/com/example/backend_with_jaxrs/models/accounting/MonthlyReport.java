package com.example.backend_with_jaxrs.models.accounting;

import java.sql.Timestamp;
import java.util.ArrayList;

public class MonthlyReport {
    private Integer month;
    ArrayList<Session> sessions;

    public MonthlyReport() {
        sessions = new ArrayList<>();
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public ArrayList<Session> getSessions() {
        return sessions;
    }

    public void setSessions(ArrayList<Session> sessions) {
        this.sessions = sessions;
    }
}