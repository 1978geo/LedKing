package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.service.CrudService;
import org.modelmapper.ModelMapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.stream.Collectors;

public class CrudServiceImpl<ServiceModel, Entity> implements CrudService<ServiceModel> {

    protected final JpaRepository<Entity, Long> repository;
    protected final ModelMapper modelMapper;
    protected final Class<ServiceModel> serviceModelClass;
    protected final Class<Entity> entityClass;

    public CrudServiceImpl(
            JpaRepository<Entity, Long> repository,
            ModelMapper modelMapper,
            Class<ServiceModel> serviceModelClass,
            Class<Entity> entityClass
            ) {
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.serviceModelClass = serviceModelClass;
        this.entityClass = entityClass;
    }

    @Override
    public ServiceModel loadById(Long id) {
        return repository.findById(id)
                .map(entity -> modelMapper.map(entity, serviceModelClass))
                .orElse(null);
    }

    @Override
    public List<ServiceModel> getAll() {
        return repository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, serviceModelClass))
                .collect(Collectors.toList());
    }

    @Override
    public ServiceModel create(ServiceModel model) {
        Entity entity = modelMapper.map(model, entityClass);
        Entity persistentEntity = repository.save(entity);
        return modelMapper.map(persistentEntity, serviceModelClass);
    }

    @Override
    public ServiceModel update(ServiceModel model) {
        Entity entity = modelMapper.map(model, entityClass);
        Entity persistentEntity = repository.save(entity);
        return modelMapper.map(persistentEntity, serviceModelClass);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
