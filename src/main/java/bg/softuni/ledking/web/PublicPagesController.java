package bg.softuni.ledking.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PublicPagesController {

    @GetMapping("/aboutUs")
    public String getAboutUs() {
        return "/aboutUs";
    }

    @GetMapping("/contacts")
    public String getContacts() {
        return "/contacts";
    }

    @GetMapping("/history")
    public String getHistory() {
        return "/history";
    }

}
