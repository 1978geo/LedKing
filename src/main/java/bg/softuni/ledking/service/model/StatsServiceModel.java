package bg.softuni.ledking.service.model;

public class StatsServiceModel {

    private final int authRequests;
    private final int anonRequests;

    public StatsServiceModel(int authRequests, int anonRequests) {
        this.authRequests = authRequests;
        this.anonRequests = anonRequests;
    }

    public int getTotalRequests() {
        return anonRequests + authRequests;
    }

    public int getAuthRequests() {
        return authRequests;
    }


    public int getAnonRequests() {
        return anonRequests;
    }

}
