package com.iqbal.event_management_api.dto;


import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ParticipantDTO {
    private Long id;
    private Long eventId;
    private Long userId;
    private String name;
    private String email;
    private LocalDateTime registrationDate;
    private String attendanceStatus;
}
