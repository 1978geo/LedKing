package bg.softuni.ledking.service.impl;

import bg.softuni.ledking.service.ClientService;
import bg.softuni.ledking.service.model.ClientServiceModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {


    @Override
    public ClientServiceModel loadById(Long id) {
        return null;
    }

    @Override
    public List<ClientServiceModel> getAll() {
        return null;
    }

    @Override
    public ClientServiceModel create(ClientServiceModel model) {
        return null;
    }

    @Override
    public ClientServiceModel update(ClientServiceModel model) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
