package com.iqbal.event_management_api.dto;


import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EventDTO {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String location;
    private Integer capacity;
    private Long organizerId;
    private String category;
    private String status;
    private LocalDateTime registrationDeadline;
}
