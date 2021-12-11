package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.view.model.UserBindingModel;
import bg.softuni.ledking.service.model.UserServiceModel;
import bg.softuni.ledking.service.UserService;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/users")
public class UsersController extends EntityController<UserServiceModel, UserBindingModel> {

    public UsersController(UserService theService, ModelMapper modelMapper) {
        super(
                theService,
                modelMapper,
                "/admin/users",
                UserServiceModel.class,
                UserBindingModel.class,
                UserServiceModel::getId
        );
    }

    @Override
    protected void prepareViewModelForUpdate(UserServiceModel userServiceModel, UserBindingModel userBindingModel) {
        // we relay on null password to avoid updates
        if (!Boolean.TRUE.equals(userBindingModel.getChangePassword())) {
            userServiceModel.setPassword(null);
        }
    }
}
