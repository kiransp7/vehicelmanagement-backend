package com.app.dto;

import com.app.pojos.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor

@JsonInclude(Include.NON_EMPTY)
public class UserDto {

	private String firstName;
	private String lastName;
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	private Role role;
	private String contact;

	public UserDto(String firstName, String lastName, String email, String password, Role role, String contact) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.contact = contact;
	}

	public UserDto(String firstName, String lastName, String email, Role role, String contact) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.role = role;
		this.contact = contact;
	}

}
