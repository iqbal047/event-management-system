package com.iqbal.event_management_api.service;

import com.iqbal.event_management_api.dto.EventDTO;
import com.iqbal.event_management_api.entity.Event;
import com.iqbal.event_management_api.entity.User;
import com.iqbal.event_management_api.exception.ResourceNotFoundException;
import com.iqbal.event_management_api.repository.EventRepository;
import com.iqbal.event_management_api.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class EventService {
    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public EventService(EventRepository eventRepository, UserRepository userRepository, ModelMapper modelMapper) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public EventDTO createEvent(EventDTO eventDTO) {
        User organizer = userRepository.findById(eventDTO.getOrganizerId())
                .orElseThrow(() -> new ResourceNotFoundException("Organizer not found"));
        Event event = modelMapper.map(eventDTO, Event.class);
        event.setOrganizer(organizer);
        event = eventRepository.save(event);
        return modelMapper.map(event, EventDTO.class);
    }

    public EventDTO getEvent(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
        return modelMapper.map(event, EventDTO.class);
    }

    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
        modelMapper.map(eventDTO, event);
        event.setId(id);
        event = eventRepository.save(event);
        return modelMapper.map(event, EventDTO.class);
    }

    public void deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new ResourceNotFoundException("Event not found");
        }
        eventRepository.deleteById(id);
    }

    public Page<EventDTO> getAllEvents(Pageable pageable) {
        return eventRepository.findAll(pageable)
                .map(event -> modelMapper.map(event, EventDTO.class));
    }
}
