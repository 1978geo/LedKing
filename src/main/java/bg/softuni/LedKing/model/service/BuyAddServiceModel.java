package bg.softuni.LedKing.model.service;

import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.entity.enums.DisplayTypeEnum;
import bg.softuni.LedKing.model.entity.enums.PixelPitchTypeEnum;
import java.math.BigDecimal;

public class BuyAddServiceModel {

    private Long id;
    private DisplayTypeEnum type;
    private CityEntityEnum city;
    private PixelPitchTypeEnum pixel;
    private BigDecimal sizeWidth;
    private BigDecimal sizeHeight;
    private String email;
    private int phoneNumber;

    public BuyAddServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public DisplayTypeEnum getType() {
        return type;
    }

    public void setType(DisplayTypeEnum type) {
        this.type = type;
    }

    public CityEntityEnum getCity() {
        return city;
    }

    public void setCity(CityEntityEnum city) {
        this.city = city;
    }

    public PixelPitchTypeEnum getPixel() {
        return pixel;
    }

    public void setPixel(PixelPitchTypeEnum pixel) {
        this.pixel = pixel;
    }

    public BigDecimal getSizeWidth() {
        return sizeWidth;
    }

    public void setSizeWidth(BigDecimal sizeWidth) {
        this.sizeWidth = sizeWidth;
    }

    public BigDecimal getSizeHeight() {
        return sizeHeight;
    }

    public void setSizeHeight(BigDecimal sizeHeight) {
        this.sizeHeight = sizeHeight;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
