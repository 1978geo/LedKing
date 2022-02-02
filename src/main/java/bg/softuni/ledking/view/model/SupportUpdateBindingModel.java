package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.CityEntityEnum;

import javax.validation.constraints.NotNull;
import java.net.URI;

public class SupportUpdateBindingModel {
    @NotNull
    private Long id;
    @NotNull
    private CityEntityEnum city;
    @NotNull
    private java.lang.String location;
    @NotNull
    private URI imageUrl;
    private java.lang.String commentary;

    public SupportUpdateBindingModel() {
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

    public java.lang.String getCommentary() {
        return commentary;
    }

    public void setCommentary(java.lang.String commentary) {
        this.commentary = commentary;
    }
}
