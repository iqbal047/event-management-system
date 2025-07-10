package com.iqbal.event_management_api.controller;


import com.iqbal.event_management_api.dto.LoginRequest;
import com.iqbal.event_management_api.dto.RegisterRequest;
import com.iqbal.event_management_api.dto.UserDTO;
import com.iqbal.event_management_api.security.JwtTokenProvider;
import com.iqbal.event_management_api.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.register(request));
    }




    @PostMapping("/login")
    public ResponseEntity<String> login(@org.jetbrains.annotations.NotNull @RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        String token = jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(token);
    }
}
