package bg.softuni.ledking.web;

import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import bg.softuni.ledking.view.model.AdvAddBindingModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller

public class AdvController {

    public final static String PATH_USERS_REGISTER = "/advertise";

    private final RequestAdvService requestAdvService;
    private final ModelMapper modelMapper;

    public AdvController(RequestAdvService requestAdvService,
                         ModelMapper modelMapper) {
        this.requestAdvService = requestAdvService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute("advertisingModel")
    public AdvAddBindingModel advertisingModel() {
        return new AdvAddBindingModel();
    }

    @GetMapping(PATH_USERS_REGISTER)
    public String createAdvertisement() {
        return "advertiseRequest";
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
            @Valid AdvAddBindingModel advertisingModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() ) {
            redirectAttributes.addFlashAttribute("advertisingModel", advertisingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.advertisingModel", bindingResult);

            return "redirect:" + PATH_USERS_REGISTER;
        }

        RequestAdvServiceModel viewModel = modelMapper.map(advertisingModel, RequestAdvServiceModel.class);
        requestAdvService.create(viewModel);
        //
        return "redirect:/";
    }
}
