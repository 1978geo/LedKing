package bg.softuni.LedKing.repository;

import bg.softuni.LedKing.model.entity.UserRoleEntity;
import bg.softuni.LedKing.model.entity.enums.UserRoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {

  UserRoleEntity findByRole(UserRoleEnum role);

}
