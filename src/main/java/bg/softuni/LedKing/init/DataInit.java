package bg.softuni.LedKing.init;


import bg.softuni.LedKing.service.DisplayService;
import bg.softuni.LedKing.service.OrderService;
import bg.softuni.LedKing.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInit implements CommandLineRunner {
       private final UserService userService;
       private final DisplayService displayService;
       private final OrderService orderService;

    public DataInit(UserService userService, DisplayService displayService, OrderService orderService) {

        this.userService = userService;
        this.displayService = displayService;
        this.orderService = orderService;
    }


    @Override
    public void run(String... args) throws Exception {

        userService.initializeUsersAndRoles();
        displayService.initializeDisplay();
        orderService.initializeOrders();
    }
}
