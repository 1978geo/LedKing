package bg.softuni.ledking.web.controller.admin;
import bg.softuni.ledking.service.ClientService;
import bg.softuni.ledking.service.model.ClientServiceModel;
import bg.softuni.ledking.view.model.ClientBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/clients")
public class ClientController extends EntityController<ClientServiceModel, ClientBindingModel> {

    public ClientController(ClientService clientService, ModelMapper modelMapper) {
        super(
                clientService,
                modelMapper,
                "/admin/clients",
                ClientServiceModel.class,
                ClientBindingModel.class,
                ClientServiceModel::getId
        );
    }
}