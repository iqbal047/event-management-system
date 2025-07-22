import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { AuthService } from '../../../services/auth.service';
//import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
//import { MatDialog } from '@angular/material/dialog';
//import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  searchQuery = '';
  sortBy = 'startDate';
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private router: Router,
    private dialog: any
    //MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents(this.currentPage, this.pageSize, this.sortBy).subscribe({
      next: (response) => {
        this.events = response.content;
        this.totalElements = response.totalElements;
      },
      error: (error) => {
        console.error('Error loading events:', error);
      }
    });
  }

  applyFilter(): void {
    this.currentPage = 0;
    this.loadEvents();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadEvents();
  }

  viewEvent(id: number): void {
    this.router.navigate(['/events', id]);
  }

  editEvent(id: number): void {
    this.router.navigate(['/events', id, 'edit']);
  }

  registerForEvent(id: number): void {
    this.router.navigate(['/events', id, 'register']);
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(EventFormComponent, {
      width: '600px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEvents();
      }
    });
  }

  getEventImage(category: string): string {
    // Return different images based on category
    const images: Record<string, string> = {
      'music': 'assets/images/music-event.jpg',
      'sports': 'assets/images/sports-event.jpg',
      'conference': 'assets/images/conference-event.jpg',
      'default': 'assets/images/default-event.jpg'
    };
    return images[category.toLowerCase()] || images['default'];
  }

  isOrganizerOrAdmin(): boolean {
    const role = this.authService.getUserRole();
    return role === 'ORGANIZER' || role === 'ADMIN';
  }

  isParticipant(): boolean {
    return this.authService.getUserRole() === 'PARTICIPANT';
  }
}