package bg.softuni.ledking.service.model;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.repository.entity.CityEntityEnum;
import bg.softuni.ledking.repository.entity.VideoReadyEnum;
import java.time.LocalDate;

public class RequestAdvSupServiceModel {

    private Long id;
    private CategoryEnum category = CategoryEnum.ADVERTISE;
    private CityEntityEnum city;
    private LocalDate startDate;
    private LocalDate endDate;
    private VideoReadyEnum video;
    private String email;
    private String phoneNumber;

    public RequestAdvSupServiceModel() {
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

    public CityEntityEnum getCity() {
        return city;
    }

    public void setCity(CityEntityEnum city) {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
