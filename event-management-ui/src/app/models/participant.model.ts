import { Event } from './event.model';
import { User } from './user.model';

export interface Participant {
  id?: number;
  event: Event;
  user: User;
  name: string;
  email: string;
  registrationDate?: Date;
  attendanceStatus: string;
}