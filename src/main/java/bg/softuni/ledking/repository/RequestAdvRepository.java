package bg.softuni.ledking.repository;

import bg.softuni.ledking.repository.entity.CityEntityEnum;
import bg.softuni.ledking.repository.entity.RequestAdvEntity;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestAdvRepository extends JpaRepository<RequestAdvEntity,Long> {

    Optional<RequestAdvEntity> findByCity (CityEntityEnum city);

    List<RequestAdvServiceModel> findAllById (Long id);
}
