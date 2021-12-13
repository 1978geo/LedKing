package bg.softuni.ledking.config;

import bg.softuni.ledking.service.ClientService;
import bg.softuni.ledking.service.model.ClientServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect;

import java.util.List;

@Configuration
public class ApplicationBeanConfiguration {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Pbkdf2PasswordEncoder();
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public ClientService clientService() {
        return new ClientService() {
            @Override
            public void initializeClient() {

            }

            @Override
            public ClientServiceModel loadById(Long id) {
                return null;
            }

            @Override
            public List<ClientServiceModel> getAll() {
                return null;
            }

            @Override
            public ClientServiceModel create(ClientServiceModel model) {
                return null;
            }

            @Override
            public ClientServiceModel update(ClientServiceModel model) {
                return null;
            }

            @Override
            public void delete(Long id) {

            }
        };
    }

    @Bean
    public SpringSecurityDialect springSecurityDialect(){
        return new SpringSecurityDialect();
    }

}
