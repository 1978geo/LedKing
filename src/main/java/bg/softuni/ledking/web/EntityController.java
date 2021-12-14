package bg.softuni.ledking.web;

import bg.softuni.ledking.service.CrudService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import javax.validation.Valid;
import java.util.List;
import java.util.function.Function;

public abstract class EntityController<ServiceModel, ViewModel> {

    private final static Logger logger = LoggerFactory.getLogger(EntityController.class);
    protected final CrudService<ServiceModel> theService;
    protected final Class<ServiceModel> viewModelClass;
    protected final Class<ViewModel> bindingModelClass;
    protected final ModelMapper modelMapper;
    protected final String baseUrl;
    protected final Function<ServiceModel, Long> idReader;

    protected final static String infoKey = "info";
    protected final static String modelKey = "theModel";
    protected final static String viewModelBindingResultKey = BindingResult.MODEL_KEY_PREFIX + modelKey;

    protected final static String createPath = "/_create";

    public EntityController(
            CrudService<ServiceModel> theService,
            ModelMapper modelMapper,
            String baseUrl,
            Class<ServiceModel> viewModelClass,
            Class<ViewModel> bindingModelClass,
            Function<ServiceModel, Long> idReader) {
        this.theService = theService;
        this.modelMapper = modelMapper;
        this.viewModelClass = viewModelClass;
        this.bindingModelClass = bindingModelClass;
        this.baseUrl = baseUrl;
        this.idReader = idReader;
    }

    @GetMapping("/")
    public String getAll(Model model) {
        List<ServiceModel> theModel = theService.getAll();
        model.addAttribute(modelKey, theModel);
        return baseUrl + "/all";
    }

    @DeleteMapping("/{id}")
    public String deleteById(Model model, @PathVariable Long id, RedirectAttributes redirectAttributes) {
        try {
            theService.delete(id);
            redirectAttributes.addFlashAttribute(infoKey, "Deleted No: " + id);
            return "redirect:" + baseUrl + "/";
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            redirectAttributes.addFlashAttribute(infoKey, "Delete failed: " + e.getMessage());
            return "redirect:" + baseUrl + "/";
        }
    }

    @GetMapping("/{id}")
    public String showUpdateForm(
            Model model,
            @PathVariable Long id) {

        if (!model.containsAttribute(modelKey)) {
            ServiceModel serviceModel = theService.loadById(id);
            ViewModel viewModel = modelMapper.map(serviceModel, bindingModelClass);
            model.addAttribute(modelKey, viewModel);
        }
        return baseUrl + "/input-form";
    }

    @PostMapping("/{id}")
    public String update(
            @Valid ViewModel viewModel,
            BindingResult bindingResult,
            @PathVariable Long id,
            RedirectAttributes redirectAttributes) {

        String selfUrl = baseUrl + "/" + id;

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute(modelKey, viewModel);
            redirectAttributes.addFlashAttribute(viewModelBindingResultKey, bindingResult);
            return "redirect:" + selfUrl;
        }

        try {
            ServiceModel serviceModel = modelMapper.map(viewModel, viewModelClass);
            prepareViewModelForUpdate(serviceModel, viewModel);
            theService.update(serviceModel);
            redirectAttributes.addFlashAttribute(infoKey, "Updated No: " + id);
            return "redirect:" + baseUrl + "/";
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            redirectAttributes.addFlashAttribute(modelKey, viewModel);
            redirectAttributes.addFlashAttribute(infoKey, "Update failed: " + e.getMessage());
            return "redirect:" + selfUrl;
        }
    }

    protected void prepareViewModelForUpdate(ServiceModel serviceModel, ViewModel viewModel) {

    }

    @GetMapping(createPath)
    public String showCreateForm(Model model) {

        if (!model.containsAttribute(modelKey)) {
            ViewModel theModel = makeInstance(bindingModelClass);
            model.addAttribute(modelKey, theModel);
        }
        return baseUrl + "/input-form";
    }

    private <T> T makeInstance(Class<T> type) {
        try {
            T theModel = type.getDeclaredConstructor().newInstance();
            return theModel;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new RuntimeException(e);
        }
    }

    @PutMapping(createPath)
    public String create(
            @Valid ViewModel viewModel,
            BindingResult bindingResult,
            RedirectAttributes redirectAttributes) {

        String selfUrl = baseUrl + createPath;

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute(modelKey, viewModel);
            redirectAttributes.addFlashAttribute(viewModelBindingResultKey, bindingResult);
            return "redirect:" + selfUrl;
        }

        try {
            ServiceModel serviceModel = modelMapper.map(viewModel, viewModelClass);
            ServiceModel persistedServiceModel = theService.create(serviceModel);
            Long id = idReader.apply(persistedServiceModel);
            redirectAttributes.addFlashAttribute(infoKey, "Created No: " + id);
            return "redirect:" + baseUrl + "/";
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            redirectAttributes.addFlashAttribute(modelKey, viewModel);
            redirectAttributes.addFlashAttribute(infoKey, "Create failed: " + e.getMessage());
            return "redirect:" + selfUrl;
        }
    }
}
