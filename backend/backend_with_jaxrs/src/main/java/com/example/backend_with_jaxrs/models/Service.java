package com.example.backend_with_jaxrs.models;

public class Service {
    private Long id;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getApproxDurationMin() {
        return approxDurationMin;
    }

    public void setApproxDurationMin(Integer approxDurationMin) {
        this.approxDurationMin = approxDurationMin;
    }

    public String getApproxCost() {
        return approxCost;
    }

    public void setApproxCost(String approxCost) {
        this.approxCost = approxCost;
    }
}
