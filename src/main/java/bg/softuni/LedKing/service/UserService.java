package bg.softuni.LedKing.service;

import bg.softuni.LedKing.model.service.UserRegistrationServiceModel;

public interface UserService {

  void initializeUsersAndRoles();

  void registerAndLoginUser(UserRegistrationServiceModel userRegistrationServiceModel);

  boolean isUserNameFree(String username);
}
