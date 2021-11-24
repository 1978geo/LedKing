package bg.softuni.LedKing.model.binding;

import bg.softuni.LedKing.model.entity.enums.CategoryEnum;
import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.entity.enums.DisplayTypeEnum;
import bg.softuni.LedKing.model.entity.enums.PixelPitchTypeEnum;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

public class BuyRentAddBindingModel {
    @NotNull
    private CategoryEnum category;
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

    public BuyRentAddBindingModel() {
    }

    public CategoryEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryEnum category) {
        this.category = category;
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
