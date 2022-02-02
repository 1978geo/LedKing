package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import bg.softuni.ledking.view.model.AdvAddBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/requestsAdv")
public class RequestAdvController extends EntityController<RequestAdvServiceModel, AdvAddBindingModel> {

    public RequestAdvController(RequestAdvService requestAdvService, ModelMapper modelMapper) {
        super(
                requestAdvService,
                modelMapper,
                "/admin/requestsAdv",
                RequestAdvServiceModel.class,
                AdvAddBindingModel.class,
                RequestAdvServiceModel::getId
        );
    }
}