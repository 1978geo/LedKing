package bg.softuni.LedKing.model.entity;

import bg.softuni.LedKing.model.entity.enums.CategoryEnum;
import bg.softuni.LedKing.model.entity.enums.DisplayTypeEnum;

import javax.persistence.*;
import java.util.List;

import static javax.persistence.EnumType.STRING;

@Entity
@Table(name = "LedDisplays")
public class LedDisplayEntity extends BaseEntity{

  @Enumerated(STRING)
  @Column(nullable = false)
  private CategoryEnum category;
  @Enumerated(STRING)
  @Column(nullable = false)
  private DisplayTypeEnum type;
  @Column(nullable = false)
  private String imageUrl;
  @Column(nullable = false)
  private String location;

  @Column(nullable = false)
  private Integer pixelSizeWidth;
  private Integer pixelSizeHeight;
  private Integer pixelPitch;
  private Integer maximumAdvertisingTime;

  @Column(nullable = false)
  private String commentary;
  @ManyToOne
  private CampaignEntity campaign;

  public LedDisplayEntity() {
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

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public Integer getPixelSizeWidth() {
    return pixelSizeWidth;
  }

  public void setPixelSizeWidth(Integer pixelSizeWidth) {
    this.pixelSizeWidth = pixelSizeWidth;
  }

  public Integer getPixelSizeHeight() {
    return pixelSizeHeight;
  }

  public void setPixelSizeHeight(Integer pixelSizeHeight) {
    this.pixelSizeHeight = pixelSizeHeight;
  }

  public Integer getPixelPitch() {
    return pixelPitch;
  }

  public void setPixelPitch(Integer pixelPitch) {
    this.pixelPitch = pixelPitch;
  }

  public Integer getMaximumAdvertisingTime() {
    return maximumAdvertisingTime;
  }

  public void setMaximumAdvertisingTime(Integer maximumAdvertisingTime) {
    this.maximumAdvertisingTime = maximumAdvertisingTime;
  }

  public String getCommentary() {
    return commentary;
  }

  public void setCommentary(String commentary) {
    this.commentary = commentary;
  }


}
