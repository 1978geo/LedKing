package bg.softuni.LedKing.repository;

import bg.softuni.LedKing.model.entity.LedDisplayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LedDisplayRepository extends JpaRepository<LedDisplayEntity,Long> {

    Optional<LedDisplayEntity> findById(Long id);
}
