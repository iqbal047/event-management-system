package com.iqbal.event_management_api.repository;

import com.iqbal.event_management_api.entity.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository <Participant, Long> {
}
