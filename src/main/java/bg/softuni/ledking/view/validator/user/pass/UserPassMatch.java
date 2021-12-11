package bg.softuni.ledking.view.validator.user.pass;


import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UserPassMatchValidator.class)
public @interface UserPassMatch {

    String message() default "Passwords does not match";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

}
