import { User } from './user.model';

export interface Event {
  id?: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  capacity: number;
  organizer: User;
  category: string;
  status: string;
  registrationDeadline: Date;
  createdAt?: Date;
  updatedAt?: Date;
}