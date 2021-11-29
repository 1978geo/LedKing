package bg.softuni.LedKing.service.impl;

import bg.softuni.LedKing.model.entity.CityEntity;
import bg.softuni.LedKing.model.entity.OrderEntity;
import bg.softuni.LedKing.model.entity.enums.CategoryEnum;
import bg.softuni.LedKing.model.entity.enums.CityEntityEnum;
import bg.softuni.LedKing.model.view.AllOrderViewModel;
import bg.softuni.LedKing.model.view.OrderViewModel;
import bg.softuni.LedKing.repository.DisplayRepository;
import bg.softuni.LedKing.repository.OrderRepository;
import bg.softuni.LedKing.repository.UserRepository;
import bg.softuni.LedKing.service.OrderService;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;
    private final DisplayRepository displayRepository;
    private final UserRepository userRepository;

    public OrderServiceImpl(OrderRepository orderRepository, ModelMapper modelMapper, DisplayRepository displayRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
        this.displayRepository = displayRepository;
        this.userRepository = userRepository;
    }


    @Override
    public void initializeOrders() {

        if (orderRepository.count()==0){
            OrderEntity order1 = new OrderEntity();



            OrderEntity order2 = new OrderEntity();


            orderRepository.saveAll(List.of(order1, order2));


        }

    }

    @Override
    public List<OrderViewModel> getAllOrders() {
        return null;
    }

//    @Override
//    public List<OrderViewModel> getAllOrders() {
//        return orderRepository.
//                findAll().
//                stream().map(OrderEntity)
//                .collect(Collectors.toList());
//
//    }
}
