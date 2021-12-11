package bg.softuni.ledking.repository;

import bg.softuni.ledking.repository.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity, Long> {


    Optional<ClientEntity> findByName(String name);

}
