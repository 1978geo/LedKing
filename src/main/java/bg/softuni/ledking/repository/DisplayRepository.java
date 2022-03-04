package bg.softuni.ledking.repository;

import bg.softuni.ledking.repository.entity.CityEntity;
import bg.softuni.ledking.repository.entity.DisplayEntity;
import bg.softuni.ledking.repository.entity.CategoryEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DisplayRepository extends JpaRepository<DisplayEntity, Long> {

    Optional<DisplayEntity> findByCategory(CategoryEnum category);

    Optional<DisplayEntity> findByCity(String city);


}
