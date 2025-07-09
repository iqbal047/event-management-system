package com.iqbal.event_management_api.service;


import com.iqbal.event_management_api.dto.ParticipantDTO;
import com.iqbal.event_management_api.entity.Event;
import com.iqbal.event_management_api.entity.Participant;
import com.iqbal.event_management_api.entity.User;
import com.iqbal.event_management_api.exception.ResourceNotFoundException;
import com.iqbal.event_management_api.repository.EventRepository;
import com.iqbal.event_management_api.repository.ParticipantRepository;
import com.iqbal.event_management_api.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
public class ParticipantService {
    private final ParticipantRepository participantRepository;
    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public ParticipantService(ParticipantRepository participantRepository, EventRepository eventRepository,
                              UserRepository userRepository, ModelMapper modelMapper) {
        this.participantRepository = participantRepository;
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public ParticipantDTO registerParticipant(Long eventId, ParticipantDTO participantDTO) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
        Participant participant = modelMapper.map(participantDTO, Participant.class);
        participant.setEvent(event);
        if (participantDTO.getUserId() != null) {
            User user = userRepository.findById(participantDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
            participant.setUser(user);
        }
        participant = participantRepository.save(participant);
        return modelMapper.map(participant, ParticipantDTO.class);
    }

    public ParticipantDTO getParticipant(Long id) {
        Participant participant = participantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Participant not found"));
        return modelMapper.map(participant, ParticipantDTO.class);
    }

    public ParticipantDTO updateParticipant(Long id, ParticipantDTO participantDTO) {
        Participant participant = participantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Participant not found"));
        modelMapper.map(participantDTO, participant);
        participant.setId(id);
        participant = participantRepository.save(participant);
        return modelMapper.map(participant, ParticipantDTO.class);
    }

    public void deleteParticipant(Long id) {
        if (!participantRepository.existsById(id)) {
            throw new ResourceNotFoundException("Participant not found");
        }
        participantRepository.deleteById(id);
    }
}
