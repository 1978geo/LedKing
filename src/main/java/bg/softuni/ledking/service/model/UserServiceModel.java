package bg.softuni.ledking.service.model;


import bg.softuni.ledking.repository.entity.UserRoleEnum;

public class UserServiceModel {

  private Long id;
  private String firstName;
  private String lastName;
//  private Boolean changePassword = false;
  private String password;
//  private String confirmPassword;
  private String username;
  private String email;
  private Integer phoneNumber;
  private boolean active;
  private UserRoleEnum role = UserRoleEnum.USER;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

//  public String getConfirmPassword() {
//    return confirmPassword;
//  }
//
//  public void setConfirmPassword(String confirmPassword) {
//    this.confirmPassword = confirmPassword;
//  }

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

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

//  public Boolean getChangePassword() {
//    return changePassword;
//  }
//
//  public void setChangePassword(Boolean changePassword) {
//    this.changePassword = changePassword;
//  }

  public UserRoleEnum getRole() {
    return role;
  }

  public void setRole(UserRoleEnum role) {
    this.role = role;
  }
}
