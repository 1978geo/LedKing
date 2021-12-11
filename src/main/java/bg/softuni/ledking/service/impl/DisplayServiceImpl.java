package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.entity.DisplayEntity;
import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.service.model.DisplayServiceModel;
import bg.softuni.ledking.repository.DisplayRepository;
import bg.softuni.ledking.service.DisplayService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class DisplayServiceImpl implements DisplayService {

    private final DisplayRepository repository;
    private final ModelMapper modelMapper;

    public DisplayServiceImpl(DisplayRepository displayRepository, ModelMapper modelMapper) {
        this.repository = displayRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void initializeDisplay() {
        if (repository.count() == 0){
            DisplayEntity sunnyBeach = new DisplayEntity();
            sunnyBeach.setLocation("SunnyBeach");
            sunnyBeach.setCategory(CategoryEnum.ADVERTISE);
            repository.save(sunnyBeach);
        }
    }

    @Override
    public List<DisplayServiceModel> getAll() {
        return repository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, DisplayServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public DisplayServiceModel loadById(Long id) {
        return repository.findById(id)
                .map(entity -> modelMapper.map(entity, DisplayServiceModel.class))
                .orElse(null);
    }

    @Override
    public DisplayServiceModel create(DisplayServiceModel model) {
        DisplayEntity entity = modelMapper.map(model, DisplayEntity.class);
        DisplayEntity persistentEntity = repository.save(entity);
        return modelMapper.map(persistentEntity, DisplayServiceModel.class);
    }

    @Override
    public DisplayServiceModel update(DisplayServiceModel model) {
        DisplayEntity entity = modelMapper.map(model, DisplayEntity.class);
        DisplayEntity persistentEntity = repository.save(entity);
        return modelMapper.map(persistentEntity, DisplayServiceModel.class);
    }
}
