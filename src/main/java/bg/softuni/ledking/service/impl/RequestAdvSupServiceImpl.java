package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.RequestAdvSuppRepository;
import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.repository.entity.RequestAdvSupEntity;
import bg.softuni.ledking.service.RequestAdvSupService;
import bg.softuni.ledking.service.model.RequestAdvSupServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestAdvSupServiceImpl implements RequestAdvSupService {

    private final RequestAdvSuppRepository requestAdvSuppRepository;
    private final ModelMapper modelMapper;

    public RequestAdvSupServiceImpl(RequestAdvSuppRepository requestAdvSuppRepository, ModelMapper modelMapper) {
        this.requestAdvSuppRepository = requestAdvSuppRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public RequestAdvSupServiceModel loadById(Long id) {
        return requestAdvSuppRepository.findById(id)
                .map(entity -> modelMapper.map(entity, RequestAdvSupServiceModel.class))
                .orElse(null);
    }

    @Override
    public List<RequestAdvSupServiceModel> getAll() {
        return requestAdvSuppRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, RequestAdvSupServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public RequestAdvSupServiceModel create(RequestAdvSupServiceModel model) {
        RequestAdvSupEntity entity = modelMapper.map(model, RequestAdvSupEntity.class);
        RequestAdvSupEntity persistentEntity = requestAdvSuppRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestAdvSupServiceModel.class);
    }

    @Override
    public RequestAdvSupServiceModel update(RequestAdvSupServiceModel model) {
        RequestAdvSupEntity entity = modelMapper.map(model, RequestAdvSupEntity.class);
        RequestAdvSupEntity persistentEntity = requestAdvSuppRepository.save(entity);
        return modelMapper.map(persistentEntity, RequestAdvSupServiceModel.class);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void initializeRequestAdvSup() {

    }

//    @Override
//    public List<RequestAdvSupServiceModel> getAllByCategoryEnum(CategoryEnum category) {
//        return this.requestAdvSuppRepository.findAllByCategoryEnum(category).stream()
//                .map(r -> this.modelMapper.map(r, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList());
//    }
}


