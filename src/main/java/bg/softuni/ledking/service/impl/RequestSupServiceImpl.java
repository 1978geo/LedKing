package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.RequestSupRepository;
import bg.softuni.ledking.repository.entity.RequestSupEntity;
import bg.softuni.ledking.service.RequestSupService;
import bg.softuni.ledking.service.model.RequestSupServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestSupServiceImpl implements RequestSupService {

    private final RequestSupRepository requestSupRepository;
    private final ModelMapper modelMapper;

    public RequestSupServiceImpl(RequestSupRepository requestSupRepository, ModelMapper modelMapper) {
        this.requestSupRepository = requestSupRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public RequestSupServiceModel loadById(Long id) {
        return requestSupRepository.findById(id)
                .map(entity -> modelMapper.map(entity, RequestSupServiceModel.class))
                .orElse(null);
    }

    @Override
    public List<RequestSupServiceModel> getAll() {
        return requestSupRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, RequestSupServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public RequestSupServiceModel create(RequestSupServiceModel model) {
        RequestSupEntity entity = modelMapper.map(model, RequestSupEntity.class);
        RequestSupEntity persistentEntity = requestSupRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestSupServiceModel.class);
    }

    @Override
    public RequestSupServiceModel update(RequestSupServiceModel model) {
        RequestSupEntity entity = modelMapper.map(model, RequestSupEntity.class);
        RequestSupEntity persistentEntity = requestSupRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestSupServiceModel.class);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void initializeRequestSup() {

    }

//    @Override
//    public List<RequestAdvSupServiceModel> getAllByCategoryEnum(CategoryEnum category) {
//        return this.requestAdvSuppRepository.findAllByCategoryEnum(category).stream()
//                .map(r -> this.modelMapper.map(r, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList());
//    }
}


