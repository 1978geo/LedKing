package bg.softuni.ledking.repository.entity;

import javax.persistence.*;
import java.net.URI;


@Entity
@Table(name="videos")
public class VideoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private CityEntityEnum name;

    @Column(nullable = false)
    private Integer videoLengthInSeconds;
    @Column(nullable = false)
    private URI videoFile;

    public VideoEntity() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public CityEntityEnum getName() {
        return name;
    }

    public void setName(CityEntityEnum name) {
        this.name = name;
    }

    public URI getVideoFile() {
        return videoFile;
    }

    public void setVideoFile(URI videoFile) {
        this.videoFile = videoFile;
    }

    public Integer getVideoLengthInSeconds() {
        return videoLengthInSeconds;
    }

    public void setVideoLengthInSeconds(Integer videoLengthInSeconds) {
        this.videoLengthInSeconds = videoLengthInSeconds;
    }


}
