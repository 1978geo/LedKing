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
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String location;
    @OneToMany
    private Set<DisplayEntity> displays = new HashSet<>();
    @ManyToOne
    private  ClientEntity client;

    public OrderEntity() {
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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


}
