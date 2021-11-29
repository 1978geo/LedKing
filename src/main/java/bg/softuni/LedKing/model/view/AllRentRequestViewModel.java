package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;

public class AllRentRequestViewModel {
    private String name;
    private List<RentRequestViewModel> rentRequestViewModels = new ArrayList<>();

    public AllRentRequestViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RentRequestViewModel> getRentViewModels() {
        return rentRequestViewModels;
    }

    public void setRentViewModels(List<RentRequestViewModel> rentRequestViewModels) {
        this.rentRequestViewModels = rentRequestViewModels;
    }

    public RentRequestViewModel addRentViewModel (RentRequestViewModel rentRequestViewModel){
        if ( this.rentRequestViewModels == null){
            this.rentRequestViewModels = new ArrayList<>();
        }
        this.rentRequestViewModels.add(rentRequestViewModel);
        return rentRequestViewModel;
    }

}
