package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.CityEntityEnum;
import bg.softuni.ledking.repository.entity.VideoReadyEnum;
import org.springframework.format.annotation.DateTimeFormat;
import javax.validation.constraints.Email;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class AdvertiseAddBindingModel {

    //TODO multiple choice - if it is possible?
    @NotNull
    private CityEntityEnum city;
    @NotNull(message = "Date cannot be null")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @FutureOrPresent(message = "Date cannot be in the past")
    private LocalDate startDate;
    @NotNull(message = "Date cannot be null")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @FutureOrPresent(message = "Date cannot be in the past")
    private LocalDate endDate;
    @NotNull
    private VideoReadyEnum videoSpotReady;
    @Email
    @NotNull
    private String email;
    @NotNull
    private int phoneNumber;

    public AdvertiseAddBindingModel() {
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

    public VideoReadyEnum getVideoSpotReady() {
        return videoSpotReady;
    }

    public void setVideoSpotReady(VideoReadyEnum videoSpotReady) {
        this.videoSpotReady = videoSpotReady;
    }
}
