package bg.softuni.LedKing.service.impl;

import bg.softuni.LedKing.model.entity.UserEntity;
import bg.softuni.LedKing.model.entity.enums.UserRoleEnum;
import bg.softuni.LedKing.model.service.UserRegistrationServiceModel;
import bg.softuni.LedKing.repository.UserRepository;
import bg.softuni.LedKing.service.UserService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
        private final UserDetailsServiceImpl ledKingUserService;

    public UserServiceImpl(PasswordEncoder passwordEncoder,
                           UserRepository userRepository,
                          UserDetailsServiceImpl ledKingUserService) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
           this.ledKingUserService = ledKingUserService;
    }

    @Override
    public void initializeUsersAndRoles() {

        initializeUsers();
    }

    private void initializeUsers() {
        if (userRepository.count() == 0) {


            UserEntity admin = new UserEntity();
            admin
                    .setUsername("admin")
                    .setPassword(passwordEncoder.encode("test"))
                    .setFirstName("Admin")
                    .setLastName("Adminov")
                    .setActive(true);

            admin.setRole(UserRoleEnum.ADMIN);
            userRepository.save(admin);

            UserEntity pesho = new UserEntity();
            pesho
                    .setUsername("pesho")
                    .setPassword(passwordEncoder.encode("test"))
                    .setFirstName("Pesho")
                    .setLastName("Petrov")
                    .setActive(true);

            pesho.setRole(UserRoleEnum.USER);
            userRepository.save(pesho);
        }
    }



    @Override
    public void registerAndLoginUser(UserRegistrationServiceModel userRegistrationServiceModel) {


        UserEntity newUser = new UserEntity();

        newUser.
                setUsername(userRegistrationServiceModel.getUsername()).
                setFirstName(userRegistrationServiceModel.getFirstName()).
                setLastName(userRegistrationServiceModel.getLastName()).
                setActive(true).
                setPassword(passwordEncoder.encode(userRegistrationServiceModel.getPassword())).
                setRole(UserRoleEnum.USER);

        newUser = userRepository.save(newUser);

        // this is the Spring representation of a user
        UserDetails principal = ledKingUserService.loadUserByUsername(newUser.getUsername());
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                principal,
                newUser.getPassword(),
                principal.getAuthorities()
        );

        SecurityContextHolder.
                getContext().
                setAuthentication(authentication);
    }

    public boolean isUserNameFree(String username) {
        return userRepository.findByUsernameIgnoreCase(username).isEmpty();
    }
}
