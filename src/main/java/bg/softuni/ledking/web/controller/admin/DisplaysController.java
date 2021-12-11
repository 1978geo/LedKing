package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.view.model.DisplayBindingModel;
import bg.softuni.ledking.service.model.DisplayServiceModel;
import bg.softuni.ledking.service.DisplayService;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin/displays")
public class DisplaysController extends EntityController<DisplayServiceModel, DisplayBindingModel> {

    public DisplaysController(DisplayService displayService, ModelMapper modelMapper) {
        super(
                displayService,
                modelMapper,
                "/admin/displays",
                DisplayServiceModel.class,
                DisplayBindingModel.class,
                DisplayServiceModel::getId
        );
    }
}
