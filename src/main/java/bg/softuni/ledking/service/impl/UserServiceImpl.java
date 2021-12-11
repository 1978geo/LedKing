package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.entity.UserEntity;
import bg.softuni.ledking.repository.entity.UserRoleEnum;
import bg.softuni.ledking.service.model.UserServiceModel;
import bg.softuni.ledking.repository.UserRepository;
import bg.softuni.ledking.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends CrudServiceImpl<UserServiceModel, UserEntity> implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;

    public UserServiceImpl(UserRepository userRepository,
                           ModelMapper modelMapper,
                           PasswordEncoder passwordEncoder,
                           UserDetailsService userDetailsService) {
        super(userRepository, modelMapper, UserServiceModel.class, UserEntity.class);
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void initializeUsersAndRoles() {

        initializeUsers();
    }

    @Override
    public UserServiceModel create(UserServiceModel userServiceModel) {
        UserServiceModel intermediate = modelMapper.map(userServiceModel, UserServiceModel.class); // aka clone
        intermediate.setPassword(passwordEncoder.encode(intermediate.getPassword()));
        return super.create(intermediate);
    }

    @Override
    public UserServiceModel update(UserServiceModel userServiceModel) {
        UserEntity userEntity = repository.getById(userServiceModel.getId());
        if (userServiceModel.getPassword() == null) {
            // when user arrives, its password is null
            userServiceModel.setPassword(userEntity.getPassword());
        } else if (!userServiceModel.getPassword().equals(userEntity.getPassword())) {
            userServiceModel.setPassword(passwordEncoder.encode(userServiceModel.getPassword()));
        }
        return super.update(userServiceModel);
    }

    private void initializeUsers() {
        if (repository.count() == 0) {
            //
            UserServiceModel admin = new UserServiceModel();
            admin.setUsername("admin");
            admin.setFirstName("Admin");
            admin.setLastName("Adminov");
            admin.setActive(true);
            admin.setPassword("test");
            admin.setEmail("admin@ledking.com");
            admin.setPhoneNumber(88000000);
            admin.setRole(UserRoleEnum.ADMIN);
            create(admin);

            //
            UserServiceModel pesho = new UserServiceModel();
            pesho.setUsername("pesho");
            pesho.setFirstName("Pesho");
            pesho.setLastName("Petrov");
            pesho.setActive(true);
            pesho.setPassword("test");
            pesho.setEmail("pesho.petrov@reklami.com");
            pesho.setPhoneNumber(88000001);
            pesho.setRole(UserRoleEnum.USER);
            create(pesho);
        }
    }

    @Override
    public void login(String username) {

        // this is the Spring representation of a user
        UserDetails principal = userDetailsService.loadUserByUsername(username);
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                principal,
                principal.getPassword(),
                principal.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    @Override
    public void logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
    }

    public boolean isUserNameFree(String username) {
        return userRepository.findByUsernameIgnoreCase(username).isEmpty();
    }
}
