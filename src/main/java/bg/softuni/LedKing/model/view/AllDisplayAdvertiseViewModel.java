package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;


public class AllDisplayAdvertiseViewModel {

    private String name;
    private List<DisplayAdvertiseViewModel> displayAdvertiseViewModels = new ArrayList<>();

    public AllDisplayAdvertiseViewModel() {
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<DisplayAdvertiseViewModel> getDisplayAdvertiseViewModels() {
        return displayAdvertiseViewModels;
    }

    public void setDisplayAdvertiseViewModels(List<DisplayAdvertiseViewModel> displayAdvertiseViewModels) {
        this.displayAdvertiseViewModels = displayAdvertiseViewModels;
    }

    public DisplayAdvertiseViewModel addDisplayAdvertiseViewModel (DisplayAdvertiseViewModel displayAdvertiseViewModel){
        if ( this.displayAdvertiseViewModels == null){
            this.displayAdvertiseViewModels = new ArrayList<>();
        }
        this.displayAdvertiseViewModels.add(displayAdvertiseViewModel);
        return displayAdvertiseViewModel;
    }
}
