package bg.softuni.ledking.service;

import bg.softuni.ledking.service.model.ClientServiceModel;
import org.springframework.stereotype.Service;


public interface ClientService extends CrudService<ClientServiceModel>{


    void initializeClient();
}
