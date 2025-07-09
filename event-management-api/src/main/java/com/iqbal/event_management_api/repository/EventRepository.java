package com.iqbal.event_management_api.repository;

import com.iqbal.event_management_api.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository <Event, Long> {
}
