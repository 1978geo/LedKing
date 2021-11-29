package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;

public class AllAdvertiseRequestViewModel {

    private String name;
    private List<AdvertiseRequestViewModel> advertiseRequestViewModels = new ArrayList<>();

    public AllAdvertiseRequestViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<AdvertiseRequestViewModel> getAdvertiseRequestViewModels() {
        return advertiseRequestViewModels;
    }

    public void setAdvertiseRequestViewModels(List<AdvertiseRequestViewModel> advertiseRequestViewModels) {
        this.advertiseRequestViewModels = advertiseRequestViewModels;
    }

    public AdvertiseRequestViewModel addAdvertiseRequestViewModel (AdvertiseRequestViewModel advertiseRequestViewModel){
        if ( this.advertiseRequestViewModels == null){
            this.advertiseRequestViewModels = new ArrayList<>();
        }
        this.advertiseRequestViewModels.add(advertiseRequestViewModel);
        return advertiseRequestViewModel;
    }

}
