package bg.softuni.ledking.web;

import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.RequestBuyService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import bg.softuni.ledking.service.model.RequestBuyServiceModel;
import bg.softuni.ledking.view.model.AdvAddBindingModel;
import bg.softuni.ledking.view.model.BuyAddBindingModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller

public class BuyController {

    public final static String PATH_USERS_REGISTER = "/buy";

    private final RequestBuyService requestBuyService;
    private final ModelMapper modelMapper;

    public BuyController(RequestBuyService requestBuyService,
                         ModelMapper modelMapper) {
        this.requestBuyService = requestBuyService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute("buyModel")
    public BuyAddBindingModel buyModel() {
        return new BuyAddBindingModel();
    }

    @GetMapping(PATH_USERS_REGISTER)
    public String createBuyRequest() {
        return "buyRequest";
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
            @Valid BuyAddBindingModel buyModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() ) {
            redirectAttributes.addFlashAttribute("buyModel", buyModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.buyModel", bindingResult);

            return "redirect:" + PATH_USERS_REGISTER;
        }

        RequestBuyServiceModel viewModel = modelMapper.map(buyModel, RequestBuyServiceModel.class);
        requestBuyService.create(viewModel);
        //
        return "redirect:/";
    }
}
