package bg.softuni.ledking.service;


import bg.softuni.ledking.service.model.RequestRentServiceModel;

public interface RequestRentService extends CrudService<RequestRentServiceModel>{
    void initializeRequestRent();
//    List<RequestBuyServiceModel> getAllByCategoryEnum(CategoryEnum category);
}

