package com.example.backend_with_jaxrs.models;

public class Service {
    private Long id;
    private String title;
    private String description;
    private Integer approxDurationMin;
    private String approxCost;
    private String imgMainUrl;
    private String imgBeforeUrl;
    private String imgAfterUrl;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getImgMainUrl() {
        return imgMainUrl;
    }

    public void setImgMainUrl(String imgMainUrl) {
        this.imgMainUrl = imgMainUrl;
    }

    public String getImgBeforeUrl() {
        return imgBeforeUrl;
    }

    public void setImgBeforeUrl(String imgBeforeUrl) {
        this.imgBeforeUrl = imgBeforeUrl;
    }

    public String getImgAfterUrl() {
        return imgAfterUrl;
    }

    public void setImgAfterUrl(String imgAfterUrl) {
        this.imgAfterUrl = imgAfterUrl;
    }
}
