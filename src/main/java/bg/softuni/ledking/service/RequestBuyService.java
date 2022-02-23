package bg.softuni.ledking.service;


import bg.softuni.ledking.service.model.RequestBuyServiceModel;

public interface RequestBuyService extends CrudService<RequestBuyServiceModel>{
    void initializeRequestBuy();
//    List<RequestBuyServiceModel> getAllByCategoryEnum(CategoryEnum category);
}

