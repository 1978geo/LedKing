package bg.softuni.ledking.service;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.service.model.RequestAdvSupServiceModel;

import java.util.List;

public interface RequestAdvSupService extends CrudService<RequestAdvSupServiceModel> {
    void initializeRequestAdvSup();
//    List<RequestAdvSupServiceModel> getAllByCategoryEnum(CategoryEnum category);
}
