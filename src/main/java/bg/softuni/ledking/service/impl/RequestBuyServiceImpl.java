package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.RequestBuyRepository;
import bg.softuni.ledking.repository.entity.RequestBuyEntity;
import bg.softuni.ledking.service.RequestBuyService;
import bg.softuni.ledking.service.model.RequestBuyServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestBuyServiceImpl implements RequestBuyService {
    private final RequestBuyRepository requestBuyRepository;
    private final ModelMapper modelMapper;

    public RequestBuyServiceImpl(RequestBuyRepository requestBuyRepository, ModelMapper modelMapper) {
        this.requestBuyRepository = requestBuyRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public RequestBuyServiceModel loadById(Long id) {
        return requestBuyRepository.findById(id)
                .map(entity -> modelMapper.map(entity, RequestBuyServiceModel.class))
                .orElse(null);
    }

    @Override
    public List<RequestBuyServiceModel> getAll() {
        return requestBuyRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, RequestBuyServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public RequestBuyServiceModel create(RequestBuyServiceModel model) {
        RequestBuyEntity entity = modelMapper.map(model, RequestBuyEntity.class);
        RequestBuyEntity persistentEntity = requestBuyRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestBuyServiceModel.class);
    }

    @Override
    public RequestBuyServiceModel update(RequestBuyServiceModel model) {
        RequestBuyEntity entity = modelMapper.map(model, RequestBuyEntity.class);
        RequestBuyEntity persistentEntity = requestBuyRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestBuyServiceModel.class);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void initializeRequestBuy() {

    }

}
