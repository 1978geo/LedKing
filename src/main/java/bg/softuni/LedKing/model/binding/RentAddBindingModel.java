package bg.softuni.LedKing.model.binding;

import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.entity.enums.DisplayTypeEnum;
import bg.softuni.LedKing.model.entity.enums.PixelPitchTypeEnum;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

public class RentAddBindingModel {
    @NotNull
    private DisplayTypeEnum type;
    @NotNull
    private CityEntityEnum city;
    @NotNull
    private PixelPitchTypeEnum pixel;
    @NotNull
    private BigDecimal sizeWidth;
    @NotNull
    private BigDecimal sizeHeight;
    @Email
    @NotNull
    private String email;
    @NotNull
    private int phoneNumber;

    public RentAddBindingModel() {
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
}
