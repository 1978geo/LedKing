package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.service.OrderService;
import bg.softuni.ledking.service.model.OrderServiceModel;
import bg.softuni.ledking.view.model.OrderBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/admin/orders")
public class OrdersController extends EntityController<OrderServiceModel, OrderBindingModel> {

    public OrdersController(OrderService orderService, ModelMapper modelMapper) {
        super(
                orderService,
                modelMapper,
                "/admin/orders",
                OrderServiceModel.class,
                OrderBindingModel.class,
                OrderServiceModel::getId
        );
    }
}