package bg.softuni.ledking.web;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class UserLoginController {

  public final static String PATH_USERS_LOGIN = "/users/login";

  @GetMapping(PATH_USERS_LOGIN)
  public String login() {
    return "auth-login";
  }

  @PostMapping("/users/login-error")
  public String failedLogin(
          @ModelAttribute(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY)
                  String userName,
          RedirectAttributes attributes
  ) {

    attributes.addFlashAttribute("bad_credentials", true);
    attributes.addFlashAttribute("username", userName);

    return "redirect:" + PATH_USERS_LOGIN;
  }

//  @GetMapping("/users/logout")
//  public String logout() {
//    return "auth-login";
//  }
}
