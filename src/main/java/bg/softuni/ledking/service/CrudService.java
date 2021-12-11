package bg.softuni.ledking.service;

import java.util.List;

public interface CrudService <T> {

    T loadById(Long id);
    List<T> getAll();
    T create(T model);
    T update(T model);

    void delete(Long id);
}
