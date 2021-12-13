package bg.softuni.ledking.service;

import bg.softuni.ledking.service.model.ClientServiceModel;


public interface ClientService extends CrudService<ClientServiceModel>{


    void initializeClient();
}
