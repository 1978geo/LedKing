package bg.softuni.LedKing.model.view;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


public class AllSupportViewModel {

    private String name;
    private List<SupportViewModel> supportedDisplays = new ArrayList<>();

    public AllSupportViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SupportViewModel> getSupportedDisplays() {
        return supportedDisplays;
    }

    public void setSupportedDisplays(List<SupportViewModel> supportedDisplays) {
        this.supportedDisplays = supportedDisplays;
    }

    public SupportViewModel addSupportViewModel (SupportViewModel supportedDisplays){
        if ( this.supportedDisplays == null){
            this.supportedDisplays = new ArrayList<>();
        }
        this.supportedDisplays.add(supportedDisplays);
        return supportedDisplays;
    }
}
