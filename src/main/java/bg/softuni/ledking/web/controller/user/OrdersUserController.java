package bg.softuni.ledking.web.controller.user;

import bg.softuni.ledking.service.OrderService;
import bg.softuni.ledking.service.model.OrderServiceModel;
import bg.softuni.ledking.view.model.OrderBindingModel;
import bg.softuni.ledking.web.EntityController;
import bg.softuni.ledking.web.EntityUserController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/user/orders")
public class OrdersUserController extends EntityUserController<OrderServiceModel, OrderBindingModel> {

    public OrdersUserController(OrderService orderService, ModelMapper modelMapper) {
        super(
                orderService,
                modelMapper,
                "/user/orders",
                OrderServiceModel.class,
                OrderBindingModel.class,
                OrderServiceModel::getId
        );
    }
}