package bg.softuni.LedKing.repository;

import bg.softuni.LedKing.model.entity.CityEntity;
import bg.softuni.LedKing.model.entity.DisplayEntity;
import bg.softuni.LedKing.model.entity.enums.CategoryEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DisplayRepository extends JpaRepository<DisplayEntity, Long> {

    Optional<DisplayEntity> findByCategory(CategoryEnum category);

    Optional<DisplayEntity> findByCity(CityEntity city);


}
