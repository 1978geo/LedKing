package bg.softuni.LedKing.model.entity;

import bg.softuni.LedKing.model.entity.enums.CategoryEnum;
import bg.softuni.LedKing.model.entity.enums.DisplayTypeEnum;

import javax.persistence.*;

import java.net.URI;

@Entity
@Table(name = "Displays")
public class DisplayEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private CategoryEnum category;
  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private DisplayTypeEnum type;

  @Column(nullable = false)
  private URI imageUrl;

  @Column(nullable = false)
  private String location;

  @ManyToOne
  private CityEntity city;

  @Column(nullable = false, name = "sizeWidth")
  private Integer displaySizeWidth;
  @Column(nullable = false, name = "sizeHeight")
  private Integer displaySizeHeight;
  @Column(nullable = false)
  private Integer pixelPitch;
  @Column(nullable = false)
  private Integer maximumAdvertisingTime;

  @Column(nullable = false, name = "comments")
  private String commentary;

  public DisplayEntity() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public CityEntity getCity() {
    return city;
  }

  public void setCity(CityEntity city) {
    this.city = city;
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

  public URI getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(URI imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public Integer getDisplaySizeWidth() {
    return displaySizeWidth;
  }

  public void setDisplaySizeWidth(Integer pixelSizeWidth) {
    this.displaySizeWidth = pixelSizeWidth;
  }

  public Integer getDisplaySizeHeight() {
    return displaySizeHeight;
  }

  public void setDisplaySizeHeight(Integer pixelSizeHeight) {
    this.displaySizeHeight = pixelSizeHeight;
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
