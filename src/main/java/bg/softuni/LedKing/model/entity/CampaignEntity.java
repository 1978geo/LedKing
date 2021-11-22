package bg.softuni.LedKing.model.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="campaigns")
public class CampaignEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDateTime startDate;
    @Column(nullable = false)
    private LocalDateTime endDate;
    @Column(nullable = false)
    private Integer videoLengthInSeconds;
    @ManyToOne
    private LedDisplayEntity ledDisplayCampaign;

    public CampaignEntity() {
    }

    public LedDisplayEntity getLedDisplayCampaign() {
        return ledDisplayCampaign;
    }

    public void setLedDisplayCampaign(LedDisplayEntity ledDisplayCampaign) {
        this.ledDisplayCampaign = ledDisplayCampaign;
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

    public Integer getVideoLengthInSeconds() {
        return videoLengthInSeconds;
    }

    public void setVideoLengthInSeconds(Integer videoLengthInSeconds) {
        this.videoLengthInSeconds = videoLengthInSeconds;
    }


}
