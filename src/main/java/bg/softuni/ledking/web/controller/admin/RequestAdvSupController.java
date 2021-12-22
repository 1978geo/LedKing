package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.service.RequestAdvSupService;
import bg.softuni.ledking.service.model.RequestAdvSupServiceModel;
import bg.softuni.ledking.view.model.AdvSupAddBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/requestsAdvSup")
public class RequestAdvSupController extends EntityController<RequestAdvSupServiceModel, AdvSupAddBindingModel> {

    public RequestAdvSupController(RequestAdvSupService requestAdvSupService, ModelMapper modelMapper) {
        super(
                requestAdvSupService,
                modelMapper,
                "/admin/requestsAdvSup",
                RequestAdvSupServiceModel.class,
                AdvSupAddBindingModel.class,
                RequestAdvSupServiceModel::getId
        );
    }
}