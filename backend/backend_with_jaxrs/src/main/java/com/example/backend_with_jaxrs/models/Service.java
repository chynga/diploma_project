package com.example.backend_with_jaxrs.models;

public class Service {
    private String title;
    private Integer approxDurationMin;
    private String approxCost;

    public Service() {

    }

    public Service(String title, Integer approxDurationMin, String approxCost) {
        this.title = title;
        this.approxDurationMin = approxDurationMin;
        this.approxCost = approxCost;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getApproxTimeMin() {
        return approxDurationMin;
    }

    public void setApproxTimeMin(Integer approxDurationMin) {
        this.approxDurationMin = approxDurationMin;
    }

    public String getApproxCost() {
        return approxCost;
    }

    public void setApproxCost(String approxCost) {
        this.approxCost = approxCost;
    }
}
