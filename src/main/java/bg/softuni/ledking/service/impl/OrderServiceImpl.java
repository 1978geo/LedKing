package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.entity.OrderEntity;
import bg.softuni.ledking.repository.OrderRepository;
import bg.softuni.ledking.service.OrderService;
import bg.softuni.ledking.service.model.OrderServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;

    public OrderServiceImpl(OrderRepository orderRepository, ModelMapper modelMapper) {
        super();
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;

    }


    @Override
    public void initializeOrders() {

        if (orderRepository.count()==0){
            OrderEntity order1 = new OrderEntity();
            order1.setName("order1");
            order1.setStartDate(LocalDate.of(2021, Month.DECEMBER,1));
            order1.setEndDate(LocalDate.of(2022, Month.DECEMBER,1));
            order1.setVideoSpotLength(BigDecimal.valueOf(15));
            //
            OrderEntity order2 = new OrderEntity();
            order2.setName("order2");
            order2.setStartDate(LocalDate.of(2021, Month.DECEMBER, 1));
            order2.setEndDate(LocalDate.of(2022, Month.DECEMBER, 1));
            order2.setVideoSpotLength(BigDecimal.valueOf(18));
            //
            orderRepository.saveAll(List.of(order1, order2));
        }

    }

    @Override
    public List<OrderServiceModel> getAll() {
        return orderRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, OrderServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public OrderServiceModel loadById(Long id) {
        return orderRepository.findById(id)
                .map(entity -> modelMapper.map(entity, OrderServiceModel.class))
                .orElse(null);
    }

    @Override
    public OrderServiceModel create(OrderServiceModel model) {
        OrderEntity entity = modelMapper.map(model, OrderEntity.class);
        OrderEntity persistentEntity = orderRepository.save(entity);
        return modelMapper.map(persistentEntity, OrderServiceModel.class);
    }

    @Override
    public OrderServiceModel update(OrderServiceModel model) {
        OrderEntity entity = modelMapper.map(model, OrderEntity.class);
        OrderEntity persistentEntity = orderRepository.save(entity);
        return modelMapper.map(persistentEntity, OrderServiceModel.class);
    }

    @Override
    public void delete(Long id) {

    }
}
