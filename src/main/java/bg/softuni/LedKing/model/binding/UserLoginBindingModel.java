package bg.softuni.LedKing.model.binding;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserLoginBindingModel {

  @NotBlank(message = "Username can not be null or empty")
  @Size(min = 4, max = 20, message = "Username length must be between 4 and 20 characters")
  private String username;
  @NotBlank(message = "Password can not be null or empty")
  @Size(min = 4, max = 20, message = "Password length must be between 4 and 20 characters ")
  private String password;

  public UserLoginBindingModel() {
  }

  public String getUsername() {
    return username;
  }

  public UserLoginBindingModel setUsername(String username) {
    this.username = username;
    return this;
  }

  public String getPassword() {
    return password;
  }

  public UserLoginBindingModel setPassword(String password) {
    this.password = password;
    return this;
  }
}
