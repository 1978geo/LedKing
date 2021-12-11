package bg.softuni.ledking.service;

import bg.softuni.ledking.service.model.DisplayServiceModel;

public interface DisplayService extends CrudService<DisplayServiceModel> {

    void initializeDisplay();
}
