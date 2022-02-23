package bg.softuni.ledking.repository;

import bg.softuni.ledking.repository.entity.RequestRentEntity;
import bg.softuni.ledking.service.model.RequestRentServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestRentRepository extends JpaRepository<RequestRentEntity,Long> {

    Optional<RequestRentEntity> findByCity(String city);
    List<RequestRentServiceModel> findAllById (Long id);
}
