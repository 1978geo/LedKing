package bg.softuni.LedKing.service;

import bg.softuni.LedKing.model.view.DisplayViewModel;

import java.util.List;

public interface DisplayService {

    void initializeDisplay();

    List<DisplayViewModel> getAllDisplays();
}
