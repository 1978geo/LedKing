package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;

public class AllBuyViewModel {
    private String name;
    private List<BuyViewModel> buyViewModels = new ArrayList<>();


    public AllBuyViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<BuyViewModel> getBuyViewModels() {
        return buyViewModels;
    }

    public void setBuyViewModels(List<BuyViewModel> buyViewModels) {
        this.buyViewModels = buyViewModels;
    }

    public BuyViewModel addBuyViewModel (BuyViewModel buyViewModel){
        if ( this.buyViewModels == null){
            this.buyViewModels = new ArrayList<>();
        }
        this.buyViewModels.add(buyViewModel);
        return buyViewModel;
    }

}
