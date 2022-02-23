package bg.softuni.ledking.repository;


import bg.softuni.ledking.repository.entity.RequestBuyEntity;
import bg.softuni.ledking.service.model.RequestBuyServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestBuyRepository extends JpaRepository<RequestBuyEntity,Long> {

    Optional<RequestBuyEntity> findByCity(String city);
    List<RequestBuyServiceModel> findAllById (Long id);
}


