package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.CityEntityEnum;

import javax.validation.constraints.NotNull;
import java.net.URI;

public class DisplayAddBindingModel {
    @NotNull
    private Long displayId;
    @NotNull
    private CityEntityEnum city;
    @NotNull
    private java.lang.String location;
    @NotNull
    private URI imageUrl;
    @NotNull
    private Integer maximumAdvertisingTime;
    private java.lang.String commentary;

    public DisplayAddBindingModel() {
    }

    public Long getDisplayId() {
        return displayId;
    }

    public void setDisplayId(Long displayId) {
        this.displayId = displayId;
    }

    public CityEntityEnum getCity() {
        return city;
    }

    public void setCity(CityEntityEnum city) {
        this.city = city;
    }

    public java.lang.String getLocation() {
        return location;
    }

    public void setLocation(java.lang.String location) {
        this.location = location;
    }

    public URI getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(URI imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getMaximumAdvertisingTime() {
        return maximumAdvertisingTime;
    }

    public void setMaximumAdvertisingTime(Integer maximumAdvertisingTime) {
        this.maximumAdvertisingTime = maximumAdvertisingTime;
    }

    public java.lang.String getCommentary() {
        return commentary;
    }

    public void setCommentary(java.lang.String commentary) {
        this.commentary = commentary;
    }
}
