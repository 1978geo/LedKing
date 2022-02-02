package bg.softuni.ledking.web;

import bg.softuni.ledking.service.RequestSupService;
import bg.softuni.ledking.service.model.RequestSupServiceModel;
import bg.softuni.ledking.view.model.SupAddBindingModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller

public class SupController {

    public final static String PATH_USERS_REGISTER = "/support";

    private final RequestSupService requestSupService;
    private final ModelMapper modelMapper;

    public SupController(RequestSupService requestSupService,
                         ModelMapper modelMapper) {
        this.requestSupService = requestSupService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute("supportModel")
    public SupAddBindingModel supportModel() {
        return new SupAddBindingModel();
    }

    @GetMapping(PATH_USERS_REGISTER)
    public String createSupport() {
        return "supportRequest";
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
            @Valid SupAddBindingModel supportModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() ) {
            redirectAttributes.addFlashAttribute("supportModel", supportModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.supportModel", bindingResult);

            return "redirect:" + PATH_USERS_REGISTER;
        }

        RequestSupServiceModel viewModel = modelMapper.map(supportModel, RequestSupServiceModel.class);
        requestSupService.create(viewModel);
        //
        return "redirect:/";
    }
}
