package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;

public class AllOrderViewModel {

    private String name;
    private List<OrderViewModel> orderViewModels = new ArrayList<>();

    public AllOrderViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<OrderViewModel> getOrderViewModels() {
        return orderViewModels;
    }

    public void setOrderViewModels(List<OrderViewModel> orderViewModels) {
        this.orderViewModels = orderViewModels;
    }

    public OrderViewModel addOrderViewModel (OrderViewModel orderViewModel){
        if ( this.orderViewModels == null){
            this.orderViewModels = new ArrayList<>();
        }
        this.orderViewModels.add(orderViewModel);
        return orderViewModel;
    }

}
