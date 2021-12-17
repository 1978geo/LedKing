package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.ClientEntity;
import bg.softuni.ledking.repository.entity.DisplayEntity;
import bg.softuni.ledking.repository.entity.VideoEntity;
import org.springframework.format.annotation.DateTimeFormat;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class OrderBindingModel {

    private Long id;
    @NotBlank(message = "Name can not be null or empty")
    @Size(min = 3, max = 20, message = "Name length must be between 3 and 20 characters")
    private String name;
//    @NotEmpty(message = "Date cannot be empty")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
//    @FutureOrPresent(message = "Date cannot be in the past")
    private LocalDate startDate;
//    @NotEmpty(message = "Date cannot be empty")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
//    @FutureOrPresent(message = "Date cannot be in the past")
    private LocalDate endDate;
    @NotNull(message = "Length cannot be null")
//    @Size(min = 3, max = 300, message = "Video spot length must be between 3 and 300 seconds")
    private BigDecimal videoSpotLength;

    private Set<DisplayEntity> orderedDisplaysInCampaign;

    private Set<VideoEntity> videosForCampaign = new HashSet<>();

    private ClientEntity client;

    public OrderBindingModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<DisplayEntity> getOrderedDisplaysInCampaign() {
        return orderedDisplaysInCampaign;
    }

    public void setOrderedDisplaysInCampaign(Set<DisplayEntity> orderedDisplaysInCampaign) {
        this.orderedDisplaysInCampaign = orderedDisplaysInCampaign;
    }

    public Set<VideoEntity> getVideosForCampaign() {
        return videosForCampaign;
    }

    public void setVideosForCampaign(Set<VideoEntity> videosForCampaign) {
        this.videosForCampaign = videosForCampaign;
    }

    public ClientEntity getClient() {
        return client;
    }

    public void setClient(ClientEntity client) {
        this.client = client;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public BigDecimal getVideoSpotLength() {
        return videoSpotLength;
    }

    public void setVideoSpotLength(BigDecimal videoSpotLength) {
        this.videoSpotLength = videoSpotLength;
    }
}
