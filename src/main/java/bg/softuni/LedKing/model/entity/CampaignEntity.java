package bg.softuni.LedKing.model.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="campaigns")
public class CampaignEntity extends BaseEntity{

    private String name;
    private Integer lengthInDays;
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

    public Integer getLengthInDays() {
        return lengthInDays;
    }

    public void setLengthInDays(Integer lengthInDays) {
        this.lengthInDays = lengthInDays;
    }

    public Integer getVideoLengthInSeconds() {
        return videoLengthInSeconds;
    }

    public void setVideoLengthInSeconds(Integer videoLengthInSeconds) {
        this.videoLengthInSeconds = videoLengthInSeconds;
    }


}
