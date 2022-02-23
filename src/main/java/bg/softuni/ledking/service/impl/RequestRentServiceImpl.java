package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.RequestBuyRepository;
import bg.softuni.ledking.repository.RequestRentRepository;
import bg.softuni.ledking.repository.entity.RequestBuyEntity;
import bg.softuni.ledking.repository.entity.RequestRentEntity;
import bg.softuni.ledking.service.RequestRentService;
import bg.softuni.ledking.service.model.RequestBuyServiceModel;
import bg.softuni.ledking.service.model.RequestRentServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestRentServiceImpl implements RequestRentService {
    private final RequestRentRepository requestRentRepository;
    private final ModelMapper modelMapper;

    public RequestRentServiceImpl(RequestRentRepository requestRentRepository, ModelMapper modelMapper) {
        this.requestRentRepository = requestRentRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public RequestRentServiceModel loadById(Long id) {
        return requestRentRepository.findById(id)
                .map(entity -> modelMapper.map(entity, RequestRentServiceModel.class))
                .orElse(null);
    }

    @Override
    public List<RequestRentServiceModel> getAll() {
        return requestRentRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, RequestRentServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public RequestRentServiceModel create(RequestRentServiceModel model) {
        RequestRentEntity entity = modelMapper.map(model, RequestRentEntity.class);
        RequestRentEntity persistentEntity = requestRentRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestRentServiceModel.class);
    }

    @Override
    public RequestRentServiceModel update(RequestRentServiceModel model) {
        RequestRentEntity entity = modelMapper.map(model, RequestRentEntity.class);
        RequestRentEntity persistentEntity = requestRentRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestRentServiceModel.class);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void initializeRequestRent() {

    }

}
