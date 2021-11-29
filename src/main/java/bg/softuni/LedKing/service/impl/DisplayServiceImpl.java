package bg.softuni.LedKing.service.impl;

import bg.softuni.LedKing.model.entity.DisplayEntity;
import bg.softuni.LedKing.model.view.DisplayViewModel;
import bg.softuni.LedKing.repository.DisplayRepository;
import bg.softuni.LedKing.service.DisplayService;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class DisplayServiceImpl implements DisplayService {

    private final DisplayRepository displayRepository;
    private final ModelMapper modelMapper;

    public DisplayServiceImpl(DisplayRepository displayRepository, ModelMapper modelMapper) {
        this.displayRepository = displayRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void initializeDisplay() {
        if (displayRepository.count()==0){
            DisplayEntity sunnyBeach = new DisplayEntity();
            sunnyBeach.setLocation("SunnyBeach");

            displayRepository.save(sunnyBeach);
        }
    }

    @Override
    public List<DisplayViewModel> getAllDisplays() {
        return displayRepository.findAll()
                .stream()
                .map(displayEntity -> {
                    //                    displayAdvertiseViewModel.setMaximumAdvertisingTime(
//                            displayEntity.getType()
//                                    .stream
//                            .map(this::map)
//                            .collect(Collectors.toList()));
                            return new DisplayViewModel().
                                    setLocation(displayEntity.getLocation());
                }).collect(Collectors.toList());
    }
}
