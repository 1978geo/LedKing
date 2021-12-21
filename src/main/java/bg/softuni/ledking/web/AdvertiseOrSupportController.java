package bg.softuni.ledking.web;

import bg.softuni.ledking.service.OrderService;
import bg.softuni.ledking.service.model.OrderServiceModel;
import bg.softuni.ledking.view.model.AdvertiseAddBindingModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller

public class AdvertiseOrSupportController  {

    public final static String PATH_USERS_REGISTER = "/advertiseOrSupport";

    private final OrderService orderService;
    private final ModelMapper modelMapper;

    public AdvertiseOrSupportController (OrderService orderService,
                                      ModelMapper modelMapper) {
        this.orderService = orderService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute("advertisingModel")
    public AdvertiseAddBindingModel advertisingModel() {
        return new AdvertiseAddBindingModel();
    }

    @GetMapping(PATH_USERS_REGISTER)
    public String createAdvertisement() {
        return "advertiseOrSupport";
    }

    @PostMapping(PATH_USERS_REGISTER)
    public String create(
            @Valid AdvertiseAddBindingModel advertisingModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors() ) {
            redirectAttributes.addFlashAttribute("advertisingModel", advertisingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.advertisingModel", bindingResult);

            return "redirect:" + PATH_USERS_REGISTER;
        }

        OrderServiceModel viewModel = modelMapper.map(advertisingModel, OrderServiceModel.class);
        orderService.create(viewModel);
        //
        return "redirect:/";
    }
}
