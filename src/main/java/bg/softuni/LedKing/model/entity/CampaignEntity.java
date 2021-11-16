package bg.softuni.LedKing.model.entity;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="campaigns")
public class CampaignEntity extends BaseEntity{

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDateTime startDate;
    @Column(nullable = false)
    private LocalDateTime endDate;
    @Column(nullable = false)
    private Integer videoLengthInSeconds;
    @OneToMany(mappedBy = "campaign" , cascade = CascadeType.ALL)
    private List<LedDisplayEntity> ledDisplayCampaignsList;

    public CampaignEntity() {
    }

    public List<LedDisplayEntity> getLedDisplayCampaignsList() {
        return ledDisplayCampaignsList;
    }

    public void setLedDisplayCampaignsList(List<LedDisplayEntity> ledDisplayCampaignsList) {
        this.ledDisplayCampaignsList = ledDisplayCampaignsList;
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

    public Integer getVideoLengthInSeconds() {
        return videoLengthInSeconds;
    }

    public void setVideoLengthInSeconds(Integer videoLengthInSeconds) {
        this.videoLengthInSeconds = videoLengthInSeconds;
    }


}
