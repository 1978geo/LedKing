package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.RequestRentService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import bg.softuni.ledking.service.model.RequestRentServiceModel;
import bg.softuni.ledking.view.model.AdvAddBindingModel;
import bg.softuni.ledking.view.model.RentAddBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/requestsRent")
public class RequestRentController extends EntityController<RequestRentServiceModel, RentAddBindingModel> {

    public RequestRentController(RequestRentService requestRentService, ModelMapper modelMapper) {
        super(
                requestRentService,
                modelMapper,
                "/admin/requestsRent",
                RequestRentServiceModel.class,
                RentAddBindingModel.class,
                RequestRentServiceModel::getId
        );
    }
}