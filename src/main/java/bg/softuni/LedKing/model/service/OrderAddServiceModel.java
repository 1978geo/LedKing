package bg.softuni.LedKing.model.service;

import bg.softuni.LedKing.model.entity.ClientEntity;
import bg.softuni.LedKing.model.entity.DisplayEntity;
import bg.softuni.LedKing.model.entity.VideoEntity;
import java.time.LocalDateTime;
import java.util.Set;

public class OrderAddServiceModel {

    private Long id;
    private Long orderId;
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer videoSpotLength;
    private Set<DisplayEntity> orderedDisplaysInCampaign;
    private Set<VideoEntity> videosForCampaign;
    private ClientEntity client;

    public OrderAddServiceModel() {
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
