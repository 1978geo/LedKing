package bg.softuni.LedKing.model.view;

import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;

import java.net.URI;


public class DisplayViewModel {

    private Long id;
    private CityEntityEnum city;
    private String location;
    private URI imageUrl;
    private Integer freeAdvertisingTime;
    private Integer maximumAdvertisingTime;
    private String commentary;

    public DisplayViewModel() {
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

    public DisplayViewModel setLocation(String location) {
        this.location = location;
        return null;
    }

    public URI getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(URI imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getFreeAdvertisingTime() {
        return freeAdvertisingTime;
    }

    public void setFreeAdvertisingTime(Integer freeAdvertisingTime) {
        this.freeAdvertisingTime = freeAdvertisingTime;
    }

    public Integer getMaximumAdvertisingTime() {
        return maximumAdvertisingTime;
    }

    public void setMaximumAdvertisingTime(Integer maximumAdvertisingTime) {
        this.maximumAdvertisingTime = maximumAdvertisingTime;
    }

    public String getCommentary() {
        return commentary;
    }

    public void setCommentary(String commentary) {
        this.commentary = commentary;
    }
}