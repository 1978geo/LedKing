package bg.softuni.LedKing.config;

import bg.softuni.LedKing.model.view.DisplayViewModel;
import bg.softuni.LedKing.model.view.OrderViewModel;
import bg.softuni.LedKing.service.DisplayService;
import bg.softuni.LedKing.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;

import java.util.ArrayList;
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
    public DisplayService displayService () {return new DisplayService() {
        @Override
        public void initializeDisplay() {

        }

        @Override
        public List<DisplayViewModel> getAllDisplays() {
            return new ArrayList<>();
        }
    };}

    @Bean
    public OrderService orderService() {return new OrderService() {
        @Override
        public void initializeOrders() {

        }

        @Override
        public List<OrderViewModel> getAllOrders() {
            return new ArrayList<>();
        }
    };}
}
