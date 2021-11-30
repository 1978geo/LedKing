package bg.softuni.LedKing.web;

import bg.softuni.LedKing.model.view.DisplayViewModel;
import bg.softuni.LedKing.service.DisplayService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/displays")
public class DisplaysController {
    private final DisplayService displayService;
    private final ModelMapper modelMapper;

    public DisplaysController(DisplayService displayService, ModelMapper modelMapper) {
        this.displayService = displayService;
        this.modelMapper = modelMapper;
    }


    @GetMapping("displays/all")
    public String getAllDisplaysPage(Model model) {
        List<DisplayViewModel> displayViewModels = displayService.getAllDisplays().stream()
                .map(displayAddServiceModel -> modelMapper.map(displayAddServiceModel, DisplayViewModel.class))
                .collect(Collectors.toList());
        model.addAttribute("allDisplays", displayViewModels);
        return "displays";
    }
}
