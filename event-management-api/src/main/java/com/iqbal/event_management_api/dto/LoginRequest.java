package com.iqbal.event_management_api.dto;


import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
