package bg.softuni.ledking.web;

import bg.softuni.ledking.repository.entity.CategoryEnum;
import bg.softuni.ledking.service.RequestAdvSupService;
import bg.softuni.ledking.service.model.RequestAdvSupServiceModel;
import bg.softuni.ledking.view.model.AdvSupAddBindingModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.stream.Collectors;

@Controller

public class AdvSupController {

    public final static String PATH_USERS_REGISTER = "/advertiseOrSupport";

    private final RequestAdvSupService requestAdvSupService;
    private final ModelMapper modelMapper;

    public AdvSupController(RequestAdvSupService requestAdvSupService,
                            ModelMapper modelMapper) {
        this.requestAdvSupService = requestAdvSupService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute("advertisingModel")
    public AdvSupAddBindingModel advertisingModel() {
        return new AdvSupAddBindingModel();
    }

    @GetMapping(PATH_USERS_REGISTER)
    public String createAdvertisement() {
        return "advertiseOrSupport";
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
            @Valid AdvSupAddBindingModel advertisingModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() ) {
            redirectAttributes.addFlashAttribute("advertisingModel", advertisingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.advertisingModel", bindingResult);

            return "redirect:" + PATH_USERS_REGISTER;
        }

        RequestAdvSupServiceModel viewModel = modelMapper.map(advertisingModel, RequestAdvSupServiceModel.class);
        requestAdvSupService.create(viewModel);
        //
        return "redirect:/";
    }
}
