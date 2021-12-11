package bg.softuni.ledking.web;

import bg.softuni.ledking.view.model.UserRegistrationBindingModel;
import bg.softuni.ledking.repository.entity.UserRoleEnum;
import bg.softuni.ledking.service.model.UserServiceModel;
import bg.softuni.ledking.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class UserRegistrationController {

  public final static String PATH_USERS_REGISTER = "/users/register";

  private final UserService userService;
  private final ModelMapper modelMapper;

  public UserRegistrationController(UserService userService,
                                    ModelMapper modelMapper) {
    this.userService = userService;
    this.modelMapper = modelMapper;
  }

  @ModelAttribute("userModel")
  public UserRegistrationBindingModel userModel() {
    return new UserRegistrationBindingModel();
  }

  @GetMapping(PATH_USERS_REGISTER)
  public String registerUser() {
    return "auth-register";
  }

  @PostMapping(PATH_USERS_REGISTER)
  public String register(
          @Valid UserRegistrationBindingModel userModel,
          BindingResult bindingResult,
          RedirectAttributes redirectAttributes) {

    if (bindingResult.hasErrors() || !userModel.getPassword().equals(userModel.getConfirmPassword())) {
      redirectAttributes.addFlashAttribute("userModel", userModel);
      redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.userModel", bindingResult);

      return "redirect:" + PATH_USERS_REGISTER;
    }

    UserServiceModel viewModel = modelMapper.map(userModel, UserServiceModel.class);
    viewModel.setActive(true);
    viewModel.setRole(UserRoleEnum.USER);
    userService.create(viewModel);
    //
    userService.login(viewModel.getUsername());

    return "redirect:/";
  }

}
