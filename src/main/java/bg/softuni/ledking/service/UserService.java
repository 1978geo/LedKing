package bg.softuni.ledking.service;

import bg.softuni.ledking.service.model.UserServiceModel;

public interface UserService extends CrudService<UserServiceModel> {

  void initializeUsersAndRoles();

  void login(String login);
  void logout();

  boolean isUserNameFree(String username);
}
