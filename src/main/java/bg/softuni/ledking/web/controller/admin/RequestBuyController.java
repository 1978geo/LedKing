package bg.softuni.ledking.web.controller.admin;

import bg.softuni.ledking.service.RequestAdvService;
import bg.softuni.ledking.service.RequestBuyService;
import bg.softuni.ledking.service.model.RequestAdvServiceModel;
import bg.softuni.ledking.service.model.RequestBuyServiceModel;
import bg.softuni.ledking.view.model.AdvAddBindingModel;
import bg.softuni.ledking.view.model.BuyAddBindingModel;
import bg.softuni.ledking.web.EntityController;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/requestsBuy")
public class RequestBuyController extends EntityController<RequestBuyServiceModel, BuyAddBindingModel> {

    public RequestBuyController(RequestBuyService requestBuyService, ModelMapper modelMapper) {
        super(
                requestBuyService,
                modelMapper,
                "/admin/requestsBuy",
                RequestBuyServiceModel.class,
                BuyAddBindingModel.class,
                RequestBuyServiceModel::getId
        );
    }
}