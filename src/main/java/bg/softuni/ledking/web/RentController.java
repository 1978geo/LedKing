package bg.softuni.ledking.web;

import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.RequestRentService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import bg.softuni.ledking.service.model.RequestRentServiceModel;
import bg.softuni.ledking.view.model.AdvAddBindingModel;
import bg.softuni.ledking.view.model.RentAddBindingModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller

public class RentController {

    public final static String PATH_USERS_REGISTER = "/rent";

    private final RequestRentService requestRentService;
    private final ModelMapper modelMapper;

    public RentController(RequestRentService requestRentService,
                          ModelMapper modelMapper) {
        this.requestRentService = requestRentService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute("rentModel")
    public RentAddBindingModel rentModel() {
        return new RentAddBindingModel();
    }

    @GetMapping(PATH_USERS_REGISTER)
    public String createRentRequest() {
        return "rentRequest";
    }

//    public String index (HttpSession httpSession, Model model){
//
//        model.addAttribute("advertise", this.requestAdvSupService
//                .getAllByCategoryEnum(CategoryEnum.ADVERTISE).stream()
//                .map(p -> this.modelMapper.map(p, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList()));
//        model.addAttribute("support", this.requestAdvSupService
//                .getAllByCategoryEnum(CategoryEnum.SUPPORT).stream()
//                .map(p -> this.modelMapper.map(p, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList()));
//        model.addAttribute("buy", this.requestAdvSupService
//                .getAllByCategoryEnum(CategoryEnum.BUY).stream()
//                .map(p -> this.modelMapper.map(p, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList()));
//        model.addAttribute("rent", this.requestAdvSupService
//                .getAllByCategoryEnum(CategoryEnum.RENT).stream()
//                .map(p -> this.modelMapper.map(p, RequestAdvSupServiceModel.class))
//                .collect(Collectors.toList()));
//        return "index";
//    }

    @PostMapping(PATH_USERS_REGISTER)
    public String create(
            @Valid RentAddBindingModel rentModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() ) {
            redirectAttributes.addFlashAttribute("rentModel", rentModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.rentModel", bindingResult);

            return "redirect:" + PATH_USERS_REGISTER;
        }

        RequestRentServiceModel viewModel = modelMapper.map(rentModel, RequestRentServiceModel.class);
        requestRentService.create(viewModel);
        //
        return "redirect:/";
    }
}
