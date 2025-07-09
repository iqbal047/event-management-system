package com.iqbal.event_management_api.repository;

import com.iqbal.event_management_api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository <User, Long> {
    Optional<User> findByEmail(String email);
}
