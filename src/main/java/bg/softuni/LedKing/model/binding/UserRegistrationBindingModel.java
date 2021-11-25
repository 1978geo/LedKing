package bg.softuni.LedKing.model.binding;


import bg.softuni.LedKing.model.validator.UniqueUserName;
import javax.validation.constraints.*;


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
  //todo do we need to be that strict?
  @Digits(message = "Phone number must contain between 7 and 16 digits", integer = 0, fraction = 0)
  private Integer phoneNumber;

  public UserRegistrationBindingModel() {
  }

  public String getFirstName() {
    return firstName;
  }

  public UserRegistrationBindingModel setFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public String getLastName() {
    return lastName;
  }

  public UserRegistrationBindingModel setLastName(String lastName) {
    this.lastName = lastName;
    return this;
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

  public UserRegistrationBindingModel setConfirmPassword(String confirmPassword) {
    this.confirmPassword = confirmPassword;
    return this;
  }

  public String getUsername() {
    return username;
  }

  public UserRegistrationBindingModel setUsername(String username) {
    this.username = username;
    return this;
  }

  public String getEmail() {
    return email;
  }

  public UserRegistrationBindingModel setEmail(String email) {
    this.email = email;
    return this;
  }

  public Integer getPhoneNumber() {
    return phoneNumber;
  }

  public UserRegistrationBindingModel setPhoneNumber(Integer phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }
}
