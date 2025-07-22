import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';


@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss']
})
export class ParticipantFormComponent implements OnInit {
  participant: Participant = {
    eventId: 0,
    name: '',
    email: '',
    attendanceStatus: 'PENDING'
  };
  isEditMode: boolean = false;

  constructor(
    private participantService: ParticipantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const eventId = this.route.snapshot.paramMap.get('eventId');
    if (id) {
      this.isEditMode = true;
      this.participantService.getParticipant(+id).subscribe(participant => {
        this.participant = participant;
      });
    } else if (eventId) {
      this.participant.eventId = +eventId;
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.participantService.updateParticipant(this.participant.id!, this.participant).subscribe(() => {
        this.router.navigate(['/events']);
      });
    } else {
      this.participantService.registerParticipant(this.participant.eventId, this.participant).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
}