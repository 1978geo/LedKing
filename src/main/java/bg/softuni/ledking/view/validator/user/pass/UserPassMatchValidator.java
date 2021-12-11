package bg.softuni.ledking.view.validator.user.pass;


import bg.softuni.ledking.view.model.UserBindingModel;
import bg.softuni.ledking.service.UserService;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Objects;

public class UserPassMatchValidator implements ConstraintValidator<UserPassMatch, UserBindingModel> {

    private final UserService userService;

    public UserPassMatchValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean isValid(UserBindingModel user, ConstraintValidatorContext context) {
        if (user.getId() == null || Boolean.TRUE.equals(user.getChangePassword())) {
            // only on creation we would validate the passwords
            return Objects.equals(user.getPassword(), user.getConfirmPassword());
        }
        return true;
    }
}

