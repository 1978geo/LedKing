package bg.softuni.LedKing.model.binding;

import bg.softuni.LedKing.model.entity.DisplayEntity;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.Set;

public class OrderAddBindingModel {

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
    private Set<DisplayEntity> orderedDisplays;

    public OrderAddBindingModel() {
    }

    public Set<DisplayEntity> getOrderedDisplays() {
        return orderedDisplays;
    }

    public void setOrderedDisplays(Set<DisplayEntity> orderedDisplays) {
        this.orderedDisplays = orderedDisplays;
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
