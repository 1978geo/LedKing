package bg.softuni.ledking.repository;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.repository.entity.CityEntityEnum;
import bg.softuni.ledking.repository.entity.RequestAdvSupEntity;
import bg.softuni.ledking.service.model.RequestAdvSupServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestAdvSuppRepository extends JpaRepository<RequestAdvSupEntity,Long> {

    Optional<RequestAdvSupEntity> findByCity (CityEntityEnum city);

//    List<RequestAdvSupServiceModel> findAllByCategoryEnum(CategoryEnum category);
}
