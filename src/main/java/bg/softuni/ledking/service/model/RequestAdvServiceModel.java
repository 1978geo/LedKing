package bg.softuni.ledking.service.model;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.repository.entity.VideoReadyEnum;

import java.time.LocalDate;

public class RequestAdvServiceModel {

    private Long id;
    private CategoryEnum category = CategoryEnum.ADVERTISE;
    private String city;
    private LocalDate startDate;
    private LocalDate endDate;
    private VideoReadyEnum video;
    private java.lang.String email;
    private java.lang.String phoneNumber;

    public RequestAdvServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CategoryEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryEnum category) {
        this.category = category;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public VideoReadyEnum getVideo() {
        return video;
    }

    public void setVideo(VideoReadyEnum video) {
        this.video = video;
    }

    public java.lang.String getEmail() {
        return email;
    }

    public void setEmail(java.lang.String email) {
        this.email = email;
    }

    public java.lang.String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(java.lang.String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
