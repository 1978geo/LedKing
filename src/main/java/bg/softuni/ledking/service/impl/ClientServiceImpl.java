package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.entity.ClientEntity;
import bg.softuni.ledking.service.model.ClientServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class ClientServiceImpl extends CrudServiceImpl<ClientServiceModel, ClientEntity>  {


    public ClientServiceImpl(JpaRepository<ClientEntity, Long> repository, ModelMapper modelMapper, Class<ClientServiceModel> clientServiceModelClass, Class<ClientEntity> clientEntityClass) {
        super(repository, modelMapper, clientServiceModelClass, clientEntityClass);
    }

    @Override
    public ClientServiceModel loadById(Long id) {
        return super.loadById(id);
    }

    @Override
    public List<ClientServiceModel> getAll() {
        return super.getAll();
    }

    @Override
    public ClientServiceModel create(ClientServiceModel clientServiceModel) {
        return super.create(clientServiceModel);
    }

    @Override
    public ClientServiceModel update(ClientServiceModel clientServiceModel) {
        return super.update(clientServiceModel);
    }

    @Override
    public void delete(Long id) {
        super.delete(id);
    }
}
