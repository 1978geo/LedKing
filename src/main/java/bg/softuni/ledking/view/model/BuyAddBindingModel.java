package bg.softuni.ledking.view.model;

import bg.softuni.ledking.repository.entity.DisplayTypeEnum;
import bg.softuni.ledking.repository.entity.PixelPitchTypeEnum;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class BuyAddBindingModel {
    @NotBlank
    private String city;
    @NotNull
    private DisplayTypeEnum type;
    @NotNull
    private PixelPitchTypeEnum pixel;
    @Email
    @NotBlank
    private String email;
    @NotNull
    private Integer phoneNumber;

    public BuyAddBindingModel() {
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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

    public DisplayTypeEnum getType() {
        return type;
    }

    public void setType(DisplayTypeEnum type) {
        this.type = type;
    }

    public PixelPitchTypeEnum getPixel() {
        return pixel;
    }

    public void setPixel(PixelPitchTypeEnum pixel) {
        this.pixel = pixel;
    }

}
