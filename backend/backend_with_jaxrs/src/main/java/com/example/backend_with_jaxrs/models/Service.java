package com.example.backend_with_jaxrs.models;

public class Service {
    private String title;
    private String approxTimeMin;
    private String approxCost;

    public Service() {

    }

    public Service(String title, String approxTimeMin, String approxCost) {
        this.title = title;
        this.approxTimeMin = approxTimeMin;
        this.approxCost = approxCost;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getApproxTimeMin() {
        return approxTimeMin;
    }

    public void setApproxTimeMin(String approxTimeMin) {
        this.approxTimeMin = approxTimeMin;
    }

    public String getApproxCost() {
        return approxCost;
    }

    public void setApproxCost(String approxCost) {
        this.approxCost = approxCost;
    }
}
