package bg.softuni.ledking.service;


import bg.softuni.ledking.service.model.StatsServiceModel;

public interface StatsService {
    void onRequest();
    StatsServiceModel getStats();
}
