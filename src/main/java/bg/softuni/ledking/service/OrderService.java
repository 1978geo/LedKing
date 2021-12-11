package bg.softuni.ledking.service;

import bg.softuni.ledking.service.model.OrderServiceModel;


public interface OrderService extends CrudService<OrderServiceModel>{

    void initializeOrders();

}
