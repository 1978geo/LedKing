package bg.softuni.LedKing.service;

import bg.softuni.LedKing.model.view.AllOrderViewModel;
import bg.softuni.LedKing.model.view.OrderViewModel;

import java.util.List;

public interface OrderService {

    void initializeOrders();

    List<OrderViewModel> getAllOrders();
}
