package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;

public class AllRentViewModel {
    private String name;
    private List<RentViewModel> rentViewModels = new ArrayList<>();

    public AllRentViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RentViewModel> getRentViewModels() {
        return rentViewModels;
    }

    public void setRentViewModels(List<RentViewModel> rentViewModels) {
        this.rentViewModels = rentViewModels;
    }

    public RentViewModel addRentViewModel (RentViewModel rentViewModel){
        if ( this.rentViewModels == null){
            this.rentViewModels = new ArrayList<>();
        }
        this.rentViewModels.add(rentViewModel);
        return rentViewModel;
    }

}
