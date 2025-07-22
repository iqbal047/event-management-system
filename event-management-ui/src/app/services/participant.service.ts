import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = `${environment.apiUrl}/participants`;

  constructor(private http: HttpClient) { }

  registerParticipant(eventId: number, participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.apiUrl}/events/${eventId}`, participant);
  }

  getParticipant(id: number): Observable<Participant> {
    return this.http.get<Participant>(`${this.apiUrl}/${id}`);
  }

  updateParticipant(id: number, participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(`${this.apiUrl}/${id}`, participant);
  }

  deleteParticipant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}