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
    private String location;
    @NotNull
    private URI imageUrl;
    private String commentary;

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
