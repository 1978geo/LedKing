package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;

public class AllBuyRequestViewModel {
    private String name;
    private List<BuyRequestViewModel> buyRequestViewModels = new ArrayList<>();


    public AllBuyRequestViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<BuyRequestViewModel> getBuyViewModels() {
        return buyRequestViewModels;
    }

    public void setBuyViewModels(List<BuyRequestViewModel> buyRequestViewModels) {
        this.buyRequestViewModels = buyRequestViewModels;
    }

    public BuyRequestViewModel addBuyViewModel (BuyRequestViewModel buyRequestViewModel){
        if ( this.buyRequestViewModels == null){
            this.buyRequestViewModels = new ArrayList<>();
        }
        this.buyRequestViewModels.add(buyRequestViewModel);
        return buyRequestViewModel;
    }

}
