import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe({
      next: (data) => this.events = data.content,
      error: (err) => alert('Failed to load events: ' + err.message)
    });
  }

  editEvent(id: number) {
    this.router.navigate([`/events/edit/${id}`]);
  }

  deleteEvent(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe({
        next: () => this.events = this.events.filter(event => event.id !== id),
        error: (err) => alert('Failed to delete event: ' + err.message)
      });
    }
  }
}