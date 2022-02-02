package bg.softuni.ledking.repository.entity;

import javax.persistence.*;

@Entity
@Table(name = "cities")
public class CityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private CityEntityEnum name;

    public CityEntity() {
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
}
