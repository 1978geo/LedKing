package bg.softuni.LedKing.repository;

import bg.softuni.LedKing.model.entity.ClientEntity;
import bg.softuni.LedKing.model.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    Optional<OrderEntity> findByName (String name);

    Optional<OrderEntity> findByClient (ClientEntity client);


}
