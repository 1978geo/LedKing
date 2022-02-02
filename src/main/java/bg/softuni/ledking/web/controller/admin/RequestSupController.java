package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.service.RequestSupService;
import bg.softuni.ledking.service.model.RequestSupServiceModel;
import bg.softuni.ledking.view.model.SupAddBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/requestsSup")
public class RequestSupController extends EntityController<RequestSupServiceModel, SupAddBindingModel> {

    public RequestSupController(RequestSupService requestSupService, ModelMapper modelMapper) {
        super(
                requestSupService,
                modelMapper,
                "/admin/requestsSup",
                RequestSupServiceModel.class,
                SupAddBindingModel.class,
                RequestSupServiceModel::getId
        );
    }
}