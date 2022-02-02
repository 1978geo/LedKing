package bg.softuni.ledking.repository;

import bg.softuni.ledking.repository.entity.CityEntityEnum;
import bg.softuni.ledking.repository.entity.RequestSupEntity;
import bg.softuni.ledking.service.model.RequestSupServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestSupRepository extends JpaRepository<RequestSupEntity,Long> {

    Optional<RequestSupEntity> findByCity (CityEntityEnum city);

    List<RequestSupServiceModel> findAllById(Long id);
}
