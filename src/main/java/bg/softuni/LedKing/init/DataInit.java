package bg.softuni.LedKing.init;


import bg.softuni.LedKing.service.ClientService;
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
       private final ClientService clientService;

    public DataInit(UserService userService, DisplayService displayService, OrderService orderService, ClientService clientService) {

        this.userService = userService;
        this.displayService = displayService;
        this.orderService = orderService;
        this.clientService = clientService;
    }


    @Override
    public void run(String... args) throws Exception {

        userService.initializeUsersAndRoles();
        displayService.initializeDisplay();
        orderService.initializeOrders();

    }
}
