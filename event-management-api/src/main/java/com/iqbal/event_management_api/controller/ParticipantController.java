package com.iqbal.event_management_api.controller;


import com.iqbal.event_management_api.dto.ParticipantDTO;
import com.iqbal.event_management_api.service.ParticipantService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/participants")
public class ParticipantController {
    private final ParticipantService participantService;

    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @PostMapping("/events/{eventId}")
    public ResponseEntity<ParticipantDTO> registerParticipant(@PathVariable Long eventId, @RequestBody ParticipantDTO participantDTO) {
        return ResponseEntity.ok(participantService.registerParticipant(eventId, participantDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ParticipantDTO> getParticipant(@PathVariable Long id) {
        return ResponseEntity.ok(participantService.getParticipant(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ParticipantDTO> updateParticipant(@PathVariable Long id, @RequestBody ParticipantDTO participantDTO) {
        return ResponseEntity.ok(participantService.updateParticipant(id, participantDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParticipant(@PathVariable Long id) {
        participantService.deleteParticipant(id);
        return ResponseEntity.noContent().build();
    }
}
