package bg.softuni.ledking.service;

import bg.softuni.ledking.service.model.RequestSupServiceModel;

public interface RequestSupService extends CrudService<RequestSupServiceModel> {
    void initializeRequestSup();
//    List<RequestSupServiceModel> getAllByCategoryEnum(CategoryEnum category);
}
