package bg.softuni.LedKing.model.service;

public class UserRegistrationServiceModel {

  private String firstName;
  private String lastName;
  private String password;
  private String username;
  private String email;
  private Integer phoneNumber;


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



  public String getUsername() {
    return username != null ?
        username.trim() :
        null;
  }

  public UserRegistrationServiceModel setUsername(String username) {
    this.username = username;
    return this;
  }

  public String getFirstName() {
    return firstName;
  }

  public UserRegistrationServiceModel setFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public String getLastName() {
    return lastName;
  }

  public UserRegistrationServiceModel setLastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  public String getPassword() {
    return password;
  }

  public UserRegistrationServiceModel setPassword(String password) {
    this.password = password;
    return this;
  }
}
