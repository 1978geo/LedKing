package bg.softuni.ledking.repository.entity;

import javax.persistence.*;

@Entity
@Table(name = "requestBuy")
public class RequestBuyEntity extends BuyRentEntity{
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryEnum category = CategoryEnum.BUY;

    public RequestBuyEntity() {
    }

    public CategoryEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryEnum category) {
        this.category = category;
    }
}
