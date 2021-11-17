package bg.softuni.LedKing.model.binding;


import bg.softuni.LedKing.model.validator.UniqueUserName;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class UserRegistrationBindingModel {

  @NotNull (message = "First name can not be null or empty")
  @Size(min=4, max=20, message = "First name length must be between 4 and 20 characters")
  private String firstName;
  @NotNull (message = "Last name can not be null or empty")
  @Size(min=4, max=20, message = "Last name length must be between 4 and 20 characters")
  private String lastName;
  @NotNull (message = "Password can not be null or empty")
  @Size(min=4, max=20, message = "Password length must be between 4 and 20 characters")
  private String password;
  @NotNull (message = "Password can not be null or empty")
  @Size(min=4, max=20, message = "Password length must be between 4 and 20 characters")
  private String confirmPassword;
  @NotBlank (message = "Username can not be null or empty")
  @Size(min=4, max=20, message = "Username length must be between 4 and 20 characters")
  @UniqueUserName
  private String username;
  @NotBlank (message = "Email can not be null or empty")
  @Email(message = "Email not valid")
  private String email;
  @NotBlank (message = "Phone number can not be null or empty")
  @Size(min=7, max=16, message = "Phone number length must be between 4 and 20 digits")
  private Integer phoneNumber;

  public UserRegistrationBindingModel() {
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getConfirmPassword() {
    return confirmPassword;
  }

  public void setConfirmPassword(String confirmPassword) {
    this.confirmPassword = confirmPassword;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Integer getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(Integer phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
}
