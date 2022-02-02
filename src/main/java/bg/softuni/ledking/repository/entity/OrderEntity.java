package bg.softuni.ledking.repository.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDate startDate;
    @Column(nullable = false)
    private LocalDate endDate;
    @Column(nullable = false)
    private BigDecimal videoSpotLength;
    @Column(nullable = false)
    @OneToMany
    private Set<VideoEntity> videos = new HashSet<>();
    @OneToMany
    private Set<DisplayEntity> displays = new HashSet<>();
    @ManyToOne
    private  ClientEntity client;

    public OrderEntity() {
    }

    public ClientEntity getClient() {
        return client;
    }

    public void setClient(ClientEntity client) {
        this.client = client;
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

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public BigDecimal getVideoSpotLength() {
        return videoSpotLength;
    }

    public void setVideoSpotLength(BigDecimal videoLengthInSeconds) {
        this.videoSpotLength = videoLengthInSeconds;
    }

    public Set<VideoEntity> getVideos() {
        return videos;
    }

    public void setVideos(Set<VideoEntity> videos) {
        this.videos = videos;
    }

    public Set<DisplayEntity> getDisplays() {
        return displays;
    }

    public void setDisplays(Set<DisplayEntity> displays) {
        this.displays = displays;
    }

    public void setName(java.lang.String order1) {
    }
}
