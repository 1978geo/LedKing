package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.CityEntityEnum;

import javax.validation.constraints.NotNull;
import java.net.URI;

public class SupportAddBindingModel {
    @NotNull
    private Long displayId;
    @NotNull
    private CityEntityEnum city;
    @NotNull
    private String location;
    @NotNull
    private URI imageUrl;
    private String commentary;

    public SupportAddBindingModel() {
    }

    public CityEntityEnum getCity() {
        return city;
    }

    public Long getDisplayId() {
        return displayId;
    }

    public void setDisplayId(Long displayId) {
        this.displayId = displayId;
    }

    public void setCity(CityEntityEnum city) {
        this.city = city;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public URI getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(URI imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCommentary() {
        return commentary;
    }

    public void setCommentary(String commentary) {
        this.commentary = commentary;
    }
}