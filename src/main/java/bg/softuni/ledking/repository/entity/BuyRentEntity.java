package bg.softuni.ledking.repository.entity;

import javax.persistence.*;
import javax.validation.constraints.Email;

@MappedSuperclass
public abstract class BuyRentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String city;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PixelPitchTypeEnum pixel = PixelPitchTypeEnum.осем_мм;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DisplayTypeEnum type = DisplayTypeEnum.ВЪНШЕН;
    @Column(nullable = false)
    @Email
    private String email;
    @Column(nullable = false)
    private Integer phoneNumber;

    public BuyRentEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public PixelPitchTypeEnum getPixel() {
        return pixel;
    }

    public void setPixel(PixelPitchTypeEnum pixel) {
        this.pixel = pixel;
    }

    public DisplayTypeEnum getType() {
        return type;
    }

    public void setType(DisplayTypeEnum type) {
        this.type = type;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
