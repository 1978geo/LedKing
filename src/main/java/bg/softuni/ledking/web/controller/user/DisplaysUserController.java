package bg.softuni.ledking.web.controller.user;

import bg.softuni.ledking.service.DisplayService;
import bg.softuni.ledking.service.model.DisplayServiceModel;
import bg.softuni.ledking.view.model.DisplayBindingModel;
import bg.softuni.ledking.web.EntityController;
import bg.softuni.ledking.web.EntityUserController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user/displays")
public class DisplaysUserController extends EntityUserController<DisplayServiceModel, DisplayBindingModel> {

    public DisplaysUserController(DisplayService displayService, ModelMapper modelMapper) {
        super(
                displayService,
                modelMapper,
                "/user/displays",
                DisplayServiceModel.class,
                DisplayBindingModel.class,
                DisplayServiceModel::getId
        );
    }
}
