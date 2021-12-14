package bg.softuni.ledking.view.model;


import bg.softuni.ledking.view.validator.user.name.UniqueUserName;
import bg.softuni.ledking.view.validator.user.pass.UserPassMatch;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigInteger;


@UniqueUserName
@UserPassMatch
public class UserBindingModel {

  private Long id;

  @NotNull (message = "First name can not be null or empty")
  @Size(min=2, max=20, message = "First name length must be between 2 and 20 characters")
  private String firstName;
  @NotNull (message = "Last name can not be null or empty")
  @Size(min=2, max=20, message = "Last name length must be between 2 and 20 characters")
  private String lastName;
  @NotNull (message = "Change Password can not be null or empty")
  private Boolean changePassword = Boolean.FALSE;
//  @NotNull (message = "Password can not be null or empty")
  private String password;
//  @NotNull (message = "Password can not be null or empty")
//  @Size(min=4, max=20, message = "Password length must be between 4 and 20 characters")
  private String confirmPassword;
  @NotBlank (message = "Username can not be null or empty")
  @Size(min=2, max=20, message = "Username length must be between 2 and 20 characters")
  private String username;
  @NotBlank (message = "Email can not be null or empty")
  @Email(message = "Email not valid")
  private String email;
  @NotNull (message = "Phone number can not be null or empty")
  //todo do we need to be that strict?
//  @Digits(message = "Phone number must contain between 7 and 16 digits", integer = 0, fraction = 0)
  private BigInteger phoneNumber;

  public UserBindingModel() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Boolean getChangePassword() {
    return changePassword;
  }

  public void setChangePassword(Boolean changePassword) {
    this.changePassword = changePassword;
  }

  public String getFirstName() {
    return firstName;
  }

  public UserBindingModel setFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public String getLastName() {
    return lastName;
  }

  public UserBindingModel setLastName(String lastName) {
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

  public UserBindingModel setConfirmPassword(String confirmPassword) {
    this.confirmPassword = confirmPassword;
    return this;
  }

  public String getUsername() {
    return username;
  }

  public UserBindingModel setUsername(String username) {
    this.username = username;
    return this;
  }

  public String getEmail() {
    return email;
  }

  public UserBindingModel setEmail(String email) {
    this.email = email;
    return this;
  }

  public BigInteger getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(BigInteger phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
}
