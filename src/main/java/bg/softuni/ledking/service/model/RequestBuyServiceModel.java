package bg.softuni.ledking.service.model;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.repository.entity.DisplayTypeEnum;
import bg.softuni.ledking.repository.entity.PixelPitchTypeEnum;
import bg.softuni.ledking.repository.entity.VideoReadyEnum;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDate;

public class RequestBuyServiceModel {

    private Long id;
    private CategoryEnum category = CategoryEnum.BUY;
    private String city;
    private PixelPitchTypeEnum pixel;
    private DisplayTypeEnum type;
    private String email;
    private Integer phoneNumber;

    public RequestBuyServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CategoryEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryEnum category) {
        this.category = category;
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
