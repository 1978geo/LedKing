package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.repository.ClientRepository;
import bg.softuni.ledking.repository.entity.ClientEntity;
import bg.softuni.ledking.service.ClientService;
import bg.softuni.ledking.service.model.ClientServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class ClientServiceImpl implements ClientService {

    final private ClientRepository clientRepository;
    final private ModelMapper modelMapper;

    public ClientServiceImpl(ClientRepository clientRepository, ModelMapper modelMapper) {
        this.clientRepository = clientRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public void initializeClient() {
        if (clientRepository.count() == 0){
            ClientEntity cocaCola = new ClientEntity();
            cocaCola.setId(1L);
            cocaCola.setName("Ivan Petrov");
            cocaCola.setEmail("petrov@cocacola.bg");
            cocaCola.setPhoneNumber(1234567);
            clientRepository.save(cocaCola);
        }
    }

    @Override
    public ClientServiceModel loadById(Long id) {
        return clientRepository.findById(id)
                .map(entity -> modelMapper.map(entity, ClientServiceModel.class))
                .orElse(null);
    }

    @Override
    public List<ClientServiceModel> getAll() {
        return clientRepository.findAll()
                .stream()
                .map(entity -> modelMapper.map(entity, ClientServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public ClientServiceModel create(ClientServiceModel model) {
        ClientEntity entity = modelMapper.map(model, ClientEntity.class);
        ClientEntity persistentEntity = clientRepository.save(entity);
        return modelMapper.map(persistentEntity, ClientServiceModel.class);
    }

    @Override
    public ClientServiceModel update(ClientServiceModel model) {
        ClientEntity entity = modelMapper.map(model, ClientEntity.class);
        ClientEntity persistentEntity = clientRepository.save(entity);
        return modelMapper.map(persistentEntity, ClientServiceModel.class);
    }

    @Override
    public void delete(Long id) {
    clientRepository.deleteById(id);
    }
}
