package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;


public class AllDisplayViewModel {

    private String name;
    private List<DisplayViewModel> displayViewModels = new ArrayList<>();

    public AllDisplayViewModel() {
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<DisplayViewModel> getDisplayAdvertiseViewModels() {
        return displayViewModels;
    }

    public void setDisplayAdvertiseViewModels(List<DisplayViewModel> displayViewModels) {
        this.displayViewModels = displayViewModels;
    }

    public DisplayViewModel addDisplayAdvertiseViewModel (DisplayViewModel displayViewModel){
        if ( this.displayViewModels == null){
            this.displayViewModels = new ArrayList<>();
        }
        this.displayViewModels.add(displayViewModel);
        return displayViewModel;
    }
}
