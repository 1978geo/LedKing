package bg.softuni.ledking.web.controller.user;
import bg.softuni.ledking.service.ClientService;
import bg.softuni.ledking.service.model.ClientServiceModel;
import bg.softuni.ledking.view.model.ClientBindingModel;
import bg.softuni.ledking.web.EntityController;
import bg.softuni.ledking.web.EntityUserController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user/clients")
public class ClientUserController extends EntityUserController<ClientServiceModel, ClientBindingModel> {

    public ClientUserController(ClientService clientService, ModelMapper modelMapper) {
        super(
                clientService,
                modelMapper,
                "/user/clients",
                ClientServiceModel.class,
                ClientBindingModel.class,
                ClientServiceModel::getId
        );
    }
}