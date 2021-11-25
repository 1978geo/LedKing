package bg.softuni.LedKing.model.service;

import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.entity.enums.VideoReadyEnum;
import java.time.LocalDateTime;

public class AdvertiseAddServiceModel {

    private Long id;
    private CityEntityEnum city;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private VideoReadyEnum videoSpotReady;
    private String email;
    private int phoneNumber;

    public AdvertiseAddServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CityEntityEnum getCity() {
        return city;
    }

    public void setCity(CityEntityEnum city) {
        this.city = city;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public VideoReadyEnum getVideoSpotReady() {
        return videoSpotReady;
    }

    public void setVideoSpotReady(VideoReadyEnum videoSpotReady) {
        this.videoSpotReady = videoSpotReady;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
