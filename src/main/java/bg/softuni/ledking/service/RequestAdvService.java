package bg.softuni.ledking.service;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;


public interface RequestAdvService extends CrudService<RequestAdvServiceModel> {
    void initializeRequestAdv();
//    List<RequestAdvServiceModel> getAllByCategoryEnum(CategoryEnum category);
}
