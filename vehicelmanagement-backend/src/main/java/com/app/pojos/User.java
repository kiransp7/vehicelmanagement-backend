package com.app.pojos;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Customer_tbl")
public class User extends BaseClass {

	@NotBlank(message = "First Name Required")
	@Length(min = 1, max = 20, message = "Invalid length of firstName!")
	@Column(name = "uname", nullable = false, length = 20)
	private String firstname;

	@NotBlank(message = "Last Name is required")
	@Length(min = 1, max = 20, message = "Invalid length of firstName!")
	@Column(name = "lname", nullable = false, length = 20)
	private String lastname;

	@NotBlank(message = "Email required")
	@Email(message = "Invalid email format!")
	@Column(nullable = false, unique = true, length = 25)
	private String email;

	@Column(name = "password")
	private String encPassword;

	@Column
	private int enabled;

	@Transient
	private Set<Role> authorities;

	@NotBlank(message = "Contact is required")
	@Length(min = 10, max = 13, message = "Invalid length of firstName!")
	@Column(name = "contact_no", length = 13)
	private String contact;
	@Enumerated(EnumType.STRING)
	private Role role;

	public User() {

	}

	public User(String name, String lname, String email, String password, String city, String contact, Role role,
			Set<Role> authorities) {
		this.firstname = name;
		this.email = email;
		this.encPassword = password;
		this.lastname = lname;
		this.contact = contact;
		this.role = role;
		this.authorities = authorities;

	}

	public User(@NotBlank(message = "Email required") @Email(message = "Invalid email format!") String email2,
			String encPassword2, Collection<GrantedAuthority> auth) {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "User [firstname=" + firstname + ", lastname=" + lastname + ", email=" + email + ", password="
				+ encPassword + ", contact=" + contact + ", role=" + role + "]";
	}

	public org.springframework.security.core.userdetails.User toUser() {
		if (this.getId() > 0) {
			String ROLE_PREFIX = "ROLE_";
			Set<Role> roles = new HashSet<Role>();
			roles.add(this.getRole());
			this.setAuthorities(roles);
			Collection<GrantedAuthority> auth = authorities.stream()
					.map(role -> new SimpleGrantedAuthority(ROLE_PREFIX + role.toString()))
					.collect(Collectors.toList());
			return new org.springframework.security.core.userdetails.User(email, encPassword, auth);
		}
		return null;
	}

}
