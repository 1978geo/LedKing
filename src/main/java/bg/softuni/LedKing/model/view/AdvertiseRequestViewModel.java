package bg.softuni.LedKing.model.view;

import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.entity.enums.VideoReadyEnum;
import java.time.LocalDateTime;

public class AdvertiseRequestViewModel {

    private CityEntityEnum city;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private VideoReadyEnum videoSpotReady;
    private String email;
    private int phoneNumber;

    public AdvertiseRequestViewModel() {
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
