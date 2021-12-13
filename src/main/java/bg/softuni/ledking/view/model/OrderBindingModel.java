package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.ClientEntity;
import bg.softuni.ledking.repository.entity.DisplayEntity;
import bg.softuni.ledking.repository.entity.VideoEntity;
import org.springframework.format.annotation.DateTimeFormat;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

public class OrderBindingModel {
    @NotNull
    private Long orderId;
    @NotBlank(message = "Name can not be null or empty")
    @Size(min = 3, max = 20, message = "Name length must be between 3 and 20 characters")
    private String name;
    @NotNull(message = "Date cannot be null")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @FutureOrPresent(message = "Date cannot be in the past")
    private LocalDateTime startDate;
    @NotNull(message = "Date cannot be null")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @FutureOrPresent(message = "Date cannot be in the past")
    private LocalDateTime endDate;
    @NotNull(message = "Length cannot be null")
    @Size(min = 3, max = 300, message = "Video spot length must be between 3 and 300 seconds")
    private Integer videoSpotLength;
    @NotNull(message = "Ordered Displays in Campaign cannot be null")
    private Set<DisplayEntity> orderedDisplaysInCampaign;
    @NotNull(message = "Videos for Campaign cannot be null")
    private Set<VideoEntity> videosForCampaign = new HashSet<>();
    @NotNull(message = "Client cannot be null")
    private ClientEntity client;

    public OrderBindingModel() {
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
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

    public Integer getVideoSpotLength() {
        return videoSpotLength;
    }

    public void setVideoSpotLength(Integer videoSpotLength) {
        this.videoSpotLength = videoSpotLength;
    }
}
