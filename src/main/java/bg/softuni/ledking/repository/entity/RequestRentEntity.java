package bg.softuni.ledking.repository.entity;

import javax.persistence.*;

@Entity
@Table(name = "requestRent")
public class RequestRentEntity extends BuyRentEntity {

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryEnum category = CategoryEnum.RENT;

    public RequestRentEntity() {
    }

    public CategoryEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryEnum category) {
        this.category = category;
    }
}
