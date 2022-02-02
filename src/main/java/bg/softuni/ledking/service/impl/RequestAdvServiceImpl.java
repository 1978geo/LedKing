package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.RequestAdvRepository;
import bg.softuni.ledking.repository.entity.RequestAdvEntity;
import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestAdvServiceImpl implements RequestAdvService {

    private final RequestAdvRepository requestAdvRepository;
    private final ModelMapper modelMapper;

    public RequestAdvServiceImpl(RequestAdvRepository requestAdvRepository, ModelMapper modelMapper) {
        this.requestAdvRepository = requestAdvRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public RequestAdvServiceModel loadById(Long id) {
        return requestAdvRepository.findById(id)
                .map(entity -> modelMapper.map(entity, RequestAdvServiceModel.class))
                .orElse(null);
    }

    @Override
    public List<RequestAdvServiceModel> getAll() {
        return requestAdvRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, RequestAdvServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public RequestAdvServiceModel create(RequestAdvServiceModel model) {
        RequestAdvEntity entity = modelMapper.map(model, RequestAdvEntity.class);
        RequestAdvEntity persistentEntity = requestAdvRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestAdvServiceModel.class);
    }

    @Override
    public RequestAdvServiceModel update(RequestAdvServiceModel model) {
        RequestAdvEntity entity = modelMapper.map(model, RequestAdvEntity.class);
        RequestAdvEntity persistentEntity = requestAdvRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestAdvServiceModel.class);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void initializeRequestAdv() {

    }

//    @Override
//    public List<RequestAdvSupServiceModel> getAllByCategoryEnum(CategoryEnum category) {
//        return this.requestAdvSuppRepository.findAllByCategoryEnum(category).stream()
//                .map(r -> this.modelMapper.map(r, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList());
//    }
}


