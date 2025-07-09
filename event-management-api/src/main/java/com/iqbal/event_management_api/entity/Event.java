package com.iqbal.event_management_api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String location;
    private Integer capacity;

    @ManyToOne
    @JoinColumn(name = "organizer_id")
    private User organizer;

    private String category;
    private String status;
    private LocalDateTime registrationDeadline;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt;
}
