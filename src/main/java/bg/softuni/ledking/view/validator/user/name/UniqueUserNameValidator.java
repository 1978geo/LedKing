package bg.softuni.ledking.view.validator.user.name;


import bg.softuni.ledking.view.model.UserBindingModel;
import bg.softuni.ledking.service.UserService;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueUserNameValidator implements ConstraintValidator<UniqueUserName, UserBindingModel> {

    private final UserService userService;

    public UniqueUserNameValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean isValid(UserBindingModel user, ConstraintValidatorContext context) {
        if (user.getId() == null && user.getUsername() != null) {
            // we are creating the user
            return userService.isUserNameFree(user.getUsername());
        }
        return true;
    }
}

