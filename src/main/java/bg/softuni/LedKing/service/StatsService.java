package bg.softuni.LedKing.service;


import bg.softuni.LedKing.model.view.StatsView;

public interface StatsService {
    void onRequest();
    StatsView getStats();
}
