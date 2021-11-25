package bg.softuni.LedKing.model.binding;

import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.entity.enums.VideoReadyEnum;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.time.LocalDateTime;

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
